'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    const teams = [
      {
        name: 'Qatar',
        icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
        location: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ecuador',
        icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
        location: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Senegal',
        icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
        location: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Netherlands',
        icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
        location: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'England',
        icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
        location: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Iran',
        icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
        location: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'USA',
        icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
        location: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Wales',
        icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
        location: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Argentina',
        icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
        location: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Saudi Arabia',
        icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
        location: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mexico',
        icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
        location: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Poland',
        icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
        location: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'France',
        icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
        location: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Australia',
        icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
        location: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Denmark',
        icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
        location: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tunisia',
        icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
        location: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Spain',
        icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
        location: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Costa Rica',
        icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
        location: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Germany',
        icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
        location: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Japan',
        icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
        location: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Belgium',
        icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
        location: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Canada',
        icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
        location: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Morocco',
        icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
        location: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Croatia',
        icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
        location: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brazil',
        icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
        location: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Serbia',
        icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
        location: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Switzerland',
        icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
        location: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cameroon',
        icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
        location: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Portugal',
        icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
        location: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ghana',
        icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
        location: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Uruguay',
        icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
        location: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Korea Republic',
        icon: 'https://static.wikia.nocookie.net/politicsandwar/images/5/57/Placeholder_Flag.png',
        location: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    return queryInterface.bulkInsert('teams', teams, {})

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
