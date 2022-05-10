const { Collab, User, Track } = require('../models')

const GetCollabs = async (req, res) => {
  try {
    const collabs = await Collab.findAll({
      include: [
        {
          association: 'users',
          through: { attributes: [] }
        }
      ]
    })
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
      include: 'users'
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
      trackId,
      collabComplete: false,
      ...req.body
    }

    let collab = await Collab.create(newCollab)
    req.body.users.forEach(async (user) => {
      const collabUser = await User.findAll({ where: { id: user.userId } })
      console.log('create collab user:', collabUser)
      await collab.addUser(collabUser)
    })
    res.send(collab)
  } catch (error) {
    throw error
  }
}

const UpdateCollab = async (req, res) => {
  try {
    let collabId = parseInt(req.params.collab_id)
    let update = {
      ...req.body
    }
    let updatedCollab = await Collab.update(update, {
      where: { id: collabId },
      returning: true
    })
    let collab = await Collab.findAll({ where: { id: collabId } })
    if (req.body.addUsers) {
      req.body.addUsers.forEach(async (user) => {
        const collabUser = await User.findAll({ where: { id: user.userId } })
        await collab[0].addUser(collabUser)
      })
    }
    if (req.body.removeUsers) {
      req.body.removeUsers.forEach(async (user) => {
        const collabUser = await User.findAll({
          where: {
            id: user.userId
          }
        })
        await collab[0].removeUser(collabUser)
      })
    }
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
