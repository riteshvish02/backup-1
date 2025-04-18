'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Agencies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      agencyname:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      modelNumber: {
        type: Sequelize.STRING,
        allowNull: false,
       
      },
      capacity: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        allowNull:false,
        validate:{
          max:500,
        }
       
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Agencies');
  }
};