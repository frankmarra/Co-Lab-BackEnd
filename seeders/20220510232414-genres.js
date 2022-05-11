'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('genres', [
      {
        genreName: 'Pop',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        genreName: 'Rock',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        genreName: 'Instrumental',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        genreName: 'Hip Hop',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('genres', null, {})
  }
}
