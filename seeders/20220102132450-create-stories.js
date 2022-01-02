'use strict';
const Story = require("../models").story;
const Space = require("../models").space;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const space1 = await Space.findOne({
      where: { title: "My time at Codaisseur" },
    });
    const space2 = await Space.findOne({
      where: { title: "I am a dummy" },
    });
    
   await Story.bulkCreate([
      {
        name: "Are Yorkies very smart?",
        imageUrl: "https://images.unsplash.com/photo-1526440847959-4e38e7f00b04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        content:
          "So, are Yorkies smart? Yorkshire Terriers are highly intelligent dogs. According to canine psychologist Stanley Coren, Yorkies are “above average” intelligent dogs. In fact, they're ranked the 34th smartest dog breed out of 138 qualifying breeds",
        spaceId: space1.id,
      },
      {
        name: "Ice Cream Lover",
        imageUrl: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        content:
          "What's my favorite ice cream? To reveal it a dream I could eat it day and night Best not to wear white Whatever size serving, I eat every bit CHOCOLATE",
        spaceId: space1.id,
      },
      {
        name: "Meditation",
        imageUrl: "https://images.unsplash.com/photo-1474418397713-7ede21d49118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2053&q=80",
        content:
          "I do meditate...actually since my childhood, though I can't recall exactly how I started. Honestly at that time I didn't know what I was doing was called meditation",
        spaceId: space2.id,
      },
      {
        name: "True Friend",
        imageUrl: "https://image.unsplash.com/photo-1622462239564-97f036d7f326?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        content:
          "A friend is like a star that twinkles and glows Or maybe like the ocean that gently flows.A friend is like gold that you should treasure And take care of forever and ever ",
        spaceId: space2.id,
      },
    ]);
  
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("stories", null, {});
  }
};
