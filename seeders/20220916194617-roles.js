'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const roles = [
      {
        name: 'Administrator',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Moderator',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'User',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    await queryInterface.bulkInsert('roles', roles, {});
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
