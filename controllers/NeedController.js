const { Need } = require('../models')

const GetNeeds = async (req, res) => {
  try {
    const needs = await Need.findAll({
      order: [['id', 'ASC']],
      include: 'tracks'
    })
    res.send(needs)
  } catch (error) {
    throw error
  }
}

const GetNeed = async (req, res) => {
  try {
    let needId = parseInt(req.params.need_id)
    let need = await Need.findByPk(needId, { include: 'tracks' })
    res.send(need)
  } catch (error) {
    throw error
  }
}

const CreateNeed = async (req, res) => {
  try {
    let newNeed = {
      ...req.body
    }
    const need = await Need.create(newNeed)
    res.send(need)
  } catch (error) {
    throw error
  }
}

const UpdateNeed = async (req, res) => {
  try {
    let needId = parseInt(req.params.need_id)
    const updatedNeed = await Need.update(req.body, {
      where: { id: needId },
      returning: true
    })
    res.send(updatedNeed)
  } catch (error) {
    throw error
  }
}

const DestroyNeed = async (req, res) => {
  try {
    let needId = parseInt(req.params.need_id)
    await Need.destroy({ where: { id: needId } })
    res.send({ message: `Need with id of ${needId} has been removed.` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetNeeds,
  GetNeed,
  CreateNeed,
  UpdateNeed,
  DestroyNeed
}
