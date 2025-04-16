'use strict';
const {
  Model
} = require('sequelize');

const {SEATS_ENUM} = require("../utils/common")
const {PREMIUM,ECONOMY,BUSINESS,FIRST_CLASS} = SEATS_ENUM.Seats
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Agency,{
        foreignKey: 'AgencyId',
        onDelete: 'CASCADE',
      })
    }
  }
  Seat.init({
    AgencyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    row: {
      type: DataTypes.INTEGER,
      allowNull: false,
     
    },
    col: {
      type: DataTypes.STRING,
      allowNull: false,
     
    },
    type:{
      type: DataTypes.ENUM,
      values: [PREMIUM,ECONOMY,BUSINESS,FIRST_CLASS],
      defaultValue:ECONOMY,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};