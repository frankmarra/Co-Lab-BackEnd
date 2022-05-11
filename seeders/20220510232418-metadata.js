'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('metadata', [
      {
        metadataName: 'Happy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        metadataName: 'Sad',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        metadataName: 'Rhythmic',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        metadataName: 'Fast',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        metadataName: 'Slow',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        metadataName: 'Intense',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        metadataName: 'Dramatic',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        metadataName: 'Chill',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        metadataName: 'Pensive',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('metadata', null, {})
  }
}
