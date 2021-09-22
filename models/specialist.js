'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Specialist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      // define association here
      Specialist.hasMany(models.Doctor,  { foreignKey: 'SpecialistId' })
    }
  };
  Specialist.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Name is required' },
        notEmpty: { msg: 'Name is required' },
      }
    },
    images: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Images is required' },
        notEmpty: { msg: 'Images is required' },
      }
    }
  }, {
    sequelize,
    modelName: 'Specialist',
  });
  return Specialist;
};