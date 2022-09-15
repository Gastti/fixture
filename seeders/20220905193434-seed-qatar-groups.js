'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    const groups = [
      { name: 'Group A', tournamentId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Group B', tournamentId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Group C', tournamentId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Group D', tournamentId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Group E', tournamentId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Group F', tournamentId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Group G', tournamentId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Group H', tournamentId: 1, createdAt: new Date(), updatedAt: new Date() },
    ];

    return queryInterface.bulkInsert('groups', groups, {});
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
