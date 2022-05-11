'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('needs', [
      {
        needName: 'Vocals',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        needName: 'Guitar',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        needName: 'Lead',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        needName: 'Bass',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        needName: 'Keys',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        needName: 'Drums',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        needName: 'Production',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        needName: 'Mix',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('needs', null, {})
  }
}
