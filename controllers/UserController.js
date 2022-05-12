const { User, Track, Album } = require('../models')

const GetUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const GetUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    const user = await User.findByPk(userId, {
      include: [
        {
          association: 'collabs'
        }
        // {
        //   model: Track,
        //   where: { userId: userId }
        // }
      ]
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const GetUserAlbums = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    const albums = await Album.findAll({
      where: [{ userId: userId }]
    })
  } catch (error) {}
}
const GetUserTracks = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    const tracks = await Track.findAll({
      where: { userId: userId },
      include: [
        {
          association: 'needs',
          through: { attributes: [] }
        },
        {
          association: 'genres',
          through: { attribures: [] }
        },
        {
          association: 'metadata',
          through: { attributes: [] }
        }
      ]
    })
    res.send(tracks)
  } catch (error) {
    error
  }
}

const UpdateUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let updatedUser = await User.update(req.body, {
      where: { id: userId },
      returning: true
    })
    res.send(updatedUser)
  } catch (error) {
    throw error
  }
}

const DestroyUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    await User.destroy({ where: { id: userId } })
    res.send({ message: `User with id of ${userId} has been removed` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetUsers,
  GetUser,
  GetUserAlbums,
  GetUserTracks,
  UpdateUser,
  DestroyUser
}
