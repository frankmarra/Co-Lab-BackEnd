const { Genre } = require('../models')

const GetGenres = async (req, res) => {
  try {
    const genres = await Genre.findAll()
    res.send(genres)
  } catch (error) {
    throw error
  }
}

const GetGenre = async (req, res) => {
  try {
    let genreId = parseInt(req.params.genre_id)
    const genre = await Genre.findByPk(genreId)
    res.send(genre)
  } catch (error) {
    throw error
  }
}

const CreateGenre = async (req, res) => {
  try {
    let newGenre = {
      ...req.body
    }
    let genre = await Genre.create(newGenre)
    res.send(genre)
  } catch (error) {
    throw error
  }
}

const UpdateGenre = async (req, res) => {
  try {
    let genreId = parseInt(req.params.genre_id)
    let updatedGenre = await Genre.update(req.body, {
      where: { id: genreId },
      returning: true
    })
    res.send(updatedGenre)
  } catch (error) {
    throw error
  }
}

const DestroyGenre = async (req, res) => {
  try {
    let genreId = parseInt(req.params.genre_id)
    await Genre.destroy({ where: { id: genreId } })
    res.send({ message: `Genre with id of ${genreId} has been removed` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetGenres,
  GetGenre,
  CreateGenre,
  UpdateGenre,
  DestroyGenre
}
