'use strict';
const fs = require('fs')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = JSON.parse(fs.readFileSync('./seeders/doctors.json', 'utf-8'))
    data.forEach(l => {
      l.createdAt = new Date()
      l.updatedAt = new Date()
    });
    await queryInterface.bulkInsert('Doctors', data, {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Doctors', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
