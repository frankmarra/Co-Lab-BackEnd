const Router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

Router.get('/', controller.GetUsers)
Router.get('/:user_id', controller.GetUser)
Router.get('/:user_id/tracks', controller.GetUserTracks)
Router.get('/:user_id/albums', controller.GetUserAlbums)
Router.put(
  '/:user_id',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.UpdateUser
)
Router.delete(
  '/:owner_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DestroyUser
)

module.exports = Router
