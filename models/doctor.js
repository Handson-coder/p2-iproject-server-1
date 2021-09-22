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
      Doctor.belongsTo(models.Specialist,  { foreignKey: 'SpecialistId' })
    }
  };
  Doctor.init({
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notEmpty: { msg: 'Full Name is required'},
        notNull: { msg: 'Full Name is required'}
      }
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notEmpty: { msg: 'Slug is required'},
        notNull: { msg: 'Slug is required'}
      }
    },
    images: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notEmpty: { msg: 'Images is required'},
        notNull: { msg: 'Images is required'}
      }
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notEmpty: { msg: 'Title is required'},
        notNull: { msg: 'Title is required'}
      }
    },
    district: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notEmpty: { msg: 'District is required'},
        notNull: { msg: 'District is required'}
      }
    },
    provider_locations: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notEmpty: { msg: 'Provider Location is required'},
        notNull: { msg: 'Provider Location is required'}
      }
    },
    specialities: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notEmpty: { msg: 'Specialities is required'},
        notNull: { msg: 'Specialities is required'}
      }
    },
    pre_salutation: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notEmpty: { msg: 'Pre Salutation is required'},
        notNull: { msg: 'Pre Salutation is required'}
      }
    },
    post_salutation: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notEmpty: { msg: 'Post Salutation is required'},
        notNull: { msg: 'Post Salutation is required'}
      }
    },
    SpecialistId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate : {
        notEmpty: { msg: 'SpecialistId Salutation is required'},
        notNull: { msg: 'SpecialistId Salutation is required'}
      }
    }
  }, {
    sequelize,
    modelName: 'Doctor',
  });
  return Doctor;
};