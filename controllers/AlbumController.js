const { Album } = require('../models')

const GetAlbums = async (req, res) => {
  try {
    const albums = await Album.findAll()
    res.send(albums)
  } catch (error) {
    error
  }
}

const GetAlbum = async (req, res) => {
  try {
    let albumId = parseInt(req.params.album_id)
    const album = await Album.findByPk(albumId)
    res.send(album)
  } catch (error) {
    error
  }
}

const CreateAlbum = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let newAlbum = {
      userId,
      ...req.body
    }
    let album = await Album.create(newAlbum)
    res.send(album)
  } catch (error) {
    error
  }
}

const UpdateAlbum = async (req, res) => {
  try {
    let albumId = parseInt(req.params.album_id)
    let updatedAlbum = await Album.update(req.body, {
      where: { id: albumId },
      returning: true
    })
    res.send(updatedAlbum)
  } catch (error) {
    throw error
  }
}

const DestroyAlbum = async (req, res) => {
  try {
    let albumId = parseInt(req.params.album_id)
    await Album.destory({ where: { id: albumId } })
    res.send({ message: `Album with id of ${albumId} has been removed.` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAlbums,
  GetAlbum,
  CreateAlbum,
  UpdateAlbum,
  DestroyAlbum
}
