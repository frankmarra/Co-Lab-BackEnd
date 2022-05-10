const { Collab, User, Track } = require('../models')

const GetCollabs = async (req, res) => {
  try {
    const collabs = await Collab.findAll()
    res.send(collabs)
  } catch (error) {
    throw error
  }
}

const GetCollab = async (req, res) => {
  try {
    let collabId = parseInt(req.params.collab_id)
    const collab = await Collab.findOne({
      where: { id: collabId },
      include: User
    })
    res.send(collab)
  } catch (error) {
    throw error
  }
}

const CreateCollab = async (req, res) => {
  try {
    let trackId = parseInt(req.params.track_id)
    let newCollab = {
      collabComplete: false,
      ...req.body
    }
    let collab = await Collab.create(newCollab, { include: 'users' })
    let updatedTrack = await Track.update(
      { collabId: collab.id },
      {
        where: { id: trackId },
        returning: true
      }
    )
    res.send(collab)
  } catch (error) {
    throw error
  }
}

const UpdateCollab = async (req, res) => {
  try {
    let collabId = parseInt(req.params.collab_id)
    let updatedCollab = await Collab(
      req.body,
      {
        where: { id: collabId },
        returning: true
      },
      { include: User }
    )
    res.send(updatedCollab)
  } catch (error) {
    throw error
  }
}

const DestroyCollab = async (req, res) => {
  try {
    let collabId = parseInt(req.params.collab_id)
    await Collab.destroy({ where: { id: collabId } })
    res.send({ message: `Collab with id of ${collabId} has been removed.` })
  } catch (error) {}
}

module.exports = {
  GetCollabs,
  GetCollab,
  CreateCollab,
  UpdateCollab,
  DestroyCollab
}
