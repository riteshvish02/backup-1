'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Seats', [
      {
        AirplaneId:1,
        row:1,
        col:"A",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        AirplaneId:1,
        row:1,
        col:"B",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        AirplaneId:1,
        row:1,
        col:"C",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        AirplaneId:1,
        row:1,
        col:"D",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        AirplaneId:1,
        row:1,
        col:"E",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        AirplaneId:1,
        row:1,
        col:"F",
        createdAt: new Date(),
        updatedAt: new Date()
       }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Seats', {[Op.or]:[{}]});

   
  }
};
