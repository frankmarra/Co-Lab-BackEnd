const Router = require('express').Router()
const controller = require('../controllers/GenreController')

Router.get('/', controller.GetGenres)
Router.get('/:genre_id', controller.GetGenre)
Router.post('/', controller.CreateGenre)
Router.put('/:genre_id', controller.UpdateGenre)
Router.delete('/:genre_id', controller.DestroyGenre)

module.exports = Router
