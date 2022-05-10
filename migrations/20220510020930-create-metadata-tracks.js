'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('metadatatracks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      metadataId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'metadata',
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
    await queryInterface.dropTable('metadatatracks')
  }
}
