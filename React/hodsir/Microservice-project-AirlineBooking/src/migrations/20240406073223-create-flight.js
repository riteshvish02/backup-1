'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightNumber: {
        type: Sequelize.STRING,
        allowNull: false,
       
      },
      AgencyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:'Agencies',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      arrivalAirportId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model:'Airports',
          key: 'code'
        },
        onDelete: 'CASCADE'
      },
      departureAirportId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model:'Airports',
          key: 'code'
        },
        onDelete: 'CASCADE'
      },
      arrivalTime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      departureTime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue:1500
      },
      boardingGate: {
        type: Sequelize.STRING
      },
      totalSeats: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable('flights');
  }
};