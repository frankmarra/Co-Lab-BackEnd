'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('collabs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      collabComplete: {
        type: Sequelize.BOOLEAN
      },
      trackId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'trackId',
        onDelete: 'CASCADE',
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
    await queryInterface.dropTable('collabs')
  }
}
