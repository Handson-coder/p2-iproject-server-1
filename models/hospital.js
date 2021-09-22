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
      Hospital.belongsTo(models.Province,  { foreignKey: 'provinceId' })
    }
  };
  Hospital.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notEmpty: { msg: 'name is required'},
        notNull: { msg: 'name is required'}
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notEmpty: { msg: 'address is required'},
        notNull: { msg: 'address is required'}
      }
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notEmpty: { msg: 'region is required'},
        notNull: { msg: 'region is required'}
      }
    },
    province: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notEmpty: { msg: 'province is required'},
        notNull: { msg: 'province is required'}
      }
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notEmpty: { msg: 'slug is required'},
        notNull: { msg: 'slug is required'}
      }
    },
    images: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notEmpty: { msg: 'images is required'},
        notNull: { msg: 'images is required'}
      }
    },
    provinceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate : {
        notEmpty: { msg: 'provinceId is required'},
        notNull: { msg: 'provinceId is required'}
      }
    }
  }, {
    sequelize,
    modelName: 'Hospital',
  });
  return Hospital;
};