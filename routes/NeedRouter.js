const Router = require('express').Router()
const controller = require('../controllers/NeedController')

Router.get('/', controller.GetNeeds)
Router.get('/:need_id', controller.GetNeed)
Router.post('/', controller.CreateNeed)
Router.put('/:need_id', controller.UpdateNeed)
Router.delete('/:need_id', controller.DestroyNeed)

module.exports = Router
