const Router = require('express').Router()
const controller = require('../controllers/TrackController')
const middleware = require('../middleware')

Router.get('/', controller.GetAllTracks)
Router.get('/:track_id', controller.GetTrack)
Router.get('/search/data', controller.SearchTrack)
Router.post(
  '/:user_id',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.CreateTrack
)
Router.put(
  '/:track_id',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.UpdateTrack
)
Router.delete(
  '/:track_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DestroyTrack
)

module.exports = Router
