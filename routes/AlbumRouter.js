const Router = require('express').Router()
const controller = require('../controllers/AlbumController')
const middleware = require('../middleware')

Router.get('/', controller.GetAlbums)
Router.get('/view/:album_id', controller.GetAlbum)
Router.post(
  '/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateAlbum
)
Router.put(
  '/:album_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateAlbum
)
Router.delete(
  '/:album_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DestroyAlbum
)

module.exports = Router
