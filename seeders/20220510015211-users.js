'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        userName: 'Silverbeard',
        userEmail: 'silver@beard.silverbeard',
        userPasswordDigest:
          '$2b$12$hX0uodaWu7QRNQk3YzFKHOJsqDkdIJmELqlOEarbUTOz14.eM7w/y',
        userCollabCount: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'BoomBap',
        userEmail: 'boom@bap.boombap',
        userPasswordDigest:
          '$2b$12$49wCBYj0bC17AWE4DuqaJuN8Yf22Y2jPZmmX5xFuJ/6GO.nFdj8gO',
        userCollabCount: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'PostPunk89',
        userEmail: 'post@punk.postpunk',
        userPasswordDigest:
          '$2b$12$/PZKfydlXdxfQ8Sv6F/L4euej19nkDHxg9L4LEiNFnwmUvVZrRpxa',
        userCollabCount: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Fred',
        userEmail: 'fred@fred.fred',
        userPasswordDigest:
          '$2b$12$lkFkrdLOfiUo3lroRqzp4ujeatcbmY1givYBtz0uDYr.u0FLPiXVa',
        userCollabCount: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'CoffeeConsumer',
        userEmail: 'coffee@coffee.coffee',
        userPasswordDigest:
          '$2b$12$ynLtyyDPq/K9mRyj7/aDS.YBrhloE5qo3IndZKPYiD1xPxWhWOx42',
        userCollabCount: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {})
  }
}
