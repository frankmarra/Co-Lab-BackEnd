'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('users', 'userSpotPlay', {
      type: Sequelize.STRING(1234)
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('users', 'userSpotPlay', {
      type: Sequelize.STRING
    })
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
}
