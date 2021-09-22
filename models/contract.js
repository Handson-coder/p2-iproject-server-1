'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contract extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Contract.belongsTo(models.Doctor)
      Contract.belongsTo(models.User)
    }
  };
  Contract.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate : {
        notEmpty: { msg: 'UserId is required'},
        notNull: { msg: 'UserId is required'}
      }
    },
    DoctorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate : {
        notEmpty: { msg: 'DoctorId is required'},
        notNull: { msg: 'DoctorId is required'}
      }
    }
  }, {
    sequelize,
    modelName: 'Contract',
  });
  return Contract;
};