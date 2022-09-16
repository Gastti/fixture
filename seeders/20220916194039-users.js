'use strict';

const bcryptjs = require('bcryptjs');
const salt = bcryptjs.genSaltSync(10);

module.exports = {
  async up(queryInterface, Sequelize) {
    const users = [{
      firstName: 'Admin',
      lastName: 'Account',
      email: 'admin@dev.com',
      image: '',
      password: bcryptjs.hashSync('123456', salt),
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'User',
      lastName: 'Account',
      email: 'user@dev.com',
      image: '',
      password: bcryptjs.hashSync('123456', salt),
      roleId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Second User',
      lastName: 'Account',
      email: 'secuser@dev.com',
      image: '',
      password: bcryptjs.hashSync('123456', salt),
      roleId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }]

    await queryInterface.bulkInsert('users', users, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
