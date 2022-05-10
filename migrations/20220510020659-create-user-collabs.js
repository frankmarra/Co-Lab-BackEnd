'use strict'

const { user } = require('pg/lib/defaults')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usercollabs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      collabId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'collabs',
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
    await queryInterface.dropTable('usercollabs')
  }
}
