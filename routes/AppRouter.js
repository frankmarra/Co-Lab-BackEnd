const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const AlbumRouter = require('./AlbumRouter')
const GenreRouter = require('./GenreRouter')
const MetadataRouter = require('./MetadataRouter')
const NeedRouter = require('./NeedRouter')
const TrackRouter = require('./TrackRouter')
const CollabRouter = require('./CollabRouter')
const AuthRouter = require('./AuthRouter')
const middleware = require('../middleware')

// const controller = require('../controllers/AuthController')

Router.use('/users', UserRouter, middleware.stripToken, middleware.verifyToken)
Router.use('/albums', AlbumRouter)
Router.use('/genres', GenreRouter)
Router.use('/metadata', MetadataRouter)
Router.use('/needs', NeedRouter)
Router.use('/tracks', TrackRouter)
Router.use('/collabs', CollabRouter)
Router.use('/auth', AuthRouter)

module.exports = Router
