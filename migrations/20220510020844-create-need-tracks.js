'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('needtracks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      needId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'needs',
          key: 'id'
        }
      },
      trackId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tracks',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('needtracks')
  }
}
