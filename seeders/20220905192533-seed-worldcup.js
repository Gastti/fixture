'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    const worldcup = [
      {
        name: 'FIFA World Cup Qatar 2022',
        description: "The main official international men's soccer tournament at the level of national teams in the world.",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    return queryInterface.bulkInsert('tournaments', worldcup, {})

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
