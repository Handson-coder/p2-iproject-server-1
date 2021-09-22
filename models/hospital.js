'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hospital extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Hospital.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    region: DataTypes.STRING,
    province: DataTypes.STRING,
    slug: DataTypes.STRING,
    images: DataTypes.STRING,
    provinceId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Hospital',
  });
  return Hospital;
};