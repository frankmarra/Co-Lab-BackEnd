const Router = require('express').Router()
const controller = require('../controllers/CollabController')
const middleware = require('../middleware')

Router.get('/', controller.GetCollabs)
Router.get('/:collab_id', controller.GetCollab)
Router.post(
  '/:track_id',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.CreateCollab
)
Router.put(
  '/:collab_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateCollab
)
Router.delete(
  '/:collab_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DestroyCollab
)

module.exports = Router
