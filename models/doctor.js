'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Doctor.init({
    full_name: DataTypes.STRING,
    slug: DataTypes.STRING,
    images: DataTypes.STRING,
    city: DataTypes.STRING,
    district: DataTypes.STRING,
    provider_locations: DataTypes.STRING,
    specialities: DataTypes.STRING,
    pre_salutation: DataTypes.STRING,
    post_salutation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Doctor',
  });
  return Doctor;
};