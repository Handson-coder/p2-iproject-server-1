'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Doctors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      full_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      slug: {
        allowNull: false,
        type: Sequelize.STRING
      },
      images: {
        allowNull: false,
        type: Sequelize.STRING
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING
      },
      district: {
        allowNull: false,
        type: Sequelize.STRING
      },
      provider_locations: {
        allowNull: false,
        type: Sequelize.STRING
      },
      specialities: {
        allowNull: false,
        type: Sequelize.STRING
      },
      pre_salutation: {
        allowNull: false,
        type: Sequelize.STRING
      },
      post_salutation: {
        allowNull: false,
        type: Sequelize.STRING
      },
      SpecialistId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Specialists',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Doctors');
  }
};