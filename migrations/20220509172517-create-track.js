'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tracks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      trackName: {
        type: Sequelize.STRING
      },
      trackDescription: {
        type: Sequelize.STRING
      },
      trackAudio: {
        type: Sequelize.STRING
      },
      trackLikes: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'userId',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      albumId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        field: 'albumId',
        onDelete: 'CASCADE',
        references: {
          model: 'albums',
          key: 'id'
        }
      },
      collabId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        field: 'collabId',
        onDelete: 'CASCADE',
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
    await queryInterface.dropTable('tracks')
  }
}
