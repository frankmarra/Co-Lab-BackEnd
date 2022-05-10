const Router = require('express').Router()
const controller = require('../controllers/MetadataController')

Router.get('/', controller.GetAllMetadata)
Router.get('/:metadata_id', controller.GetMetadata)
Router.post('/', controller.CreateMetadata)
Router.put('/:metadata_id', controller.UpdateMetadata)
Router.delete('/:metadata_id', controller.DestroyMetadata)

module.exports = Router
