'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Agency extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.flight,{
        foreignKey: 'AgencyId',
        onDelete: 'CASCADE',
      })
      this.hasMany(models.Seat,{
        foreignKey: 'AgencyId',
        onDelete: 'CASCADE',
      })
      // define association here
    }
  }
  Agency.init({
    agencyname:{
      type: DataTypes.STRING,
      allowNull: false,
    },

    modelNumber: {
      type: DataTypes.STRING,
      allowNull: false,
   
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue:0,
      validate: {
        max:500,
      }
    } 
  }, {
    sequelize,
    modelName: 'Agency',
  });
  return Agency;
};