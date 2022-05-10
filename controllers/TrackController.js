const { Track, Need, Metadata, Genre } = require('../models')
const genre = require('../models/genre')

const GetAllTracks = async (req, res) => {
  try {
    const tracks = await Track.findAll()
    res.send(tracks)
  } catch (error) {
    throw error
  }
}

const GetTrack = async (req, res) => {
  try {
    let trackId = parseInt(req.params.track_id)
    const track = await Track.findOne({
      where: { id: trackId },
      include: [
        {
          association: 'needs',
          through: { attributes: [] }
        },
        {
          association: 'genres',
          through: { attributes: [] }
        },
        {
          association: 'metadata',
          through: { attributes: [] }
        }
      ]
    })
    res.send(track)
  } catch (error) {
    throw error
  }
}

const CreateTrack = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let newTrack = {
      userId,
      trackLikes: 0,
      ...req.body
    }
    let track = await Track.create(newTrack)
    if (req.body.needs) {
      req.body.needs.forEach(async (need) => {
        const trackNeed = await Need.findAll({
          where: {
            id: need.needId
          }
        })
        await track.addNeed(trackNeed)
      })
    }
    if (req.body.genres) {
      req.body.genres.forEach(async (genre) => {
        const trackGenre = await Genre.findAll({
          where: { id: genre.genreId }
        })
        await track.addGenre(trackGenre)
      })
    }
    if (req.body.metadata) {
      req.body.metadata.forEach(async (data) => {
        const trackMetadata = await Metadata.findAll({
          where: { id: data.metadataId }
        })
        await track.addMetadata(trackMetadata)
      })
    }
    res.send(track)
  } catch (error) {
    throw error
  }
}

const UpdateTrack = async (req, res) => {
  try {
    let trackId = parseInt(req.params.track_id)
    let updatedTrack = await Track.update(req.body, {
      where: { id: trackId },
      returning: true
    })
    let track = await Track.findAll({ where: { id: trackId } })
    if (req.body.addNeeds) {
      req.body.addNeeds.forEach(async (need) => {
        const trackNeed = await Need.findAll({
          where: {
            id: need.needId
          }
        })
        await track[0].addNeed(trackNeed)
      })
    }
    if (req.body.addGenres) {
      req.body.addGenres.forEach(async (genre) => {
        const trackGenre = await Genre.findAll({
          where: { id: genre.genreId }
        })
        await track[0].addGenre(trackGenre)
      })
    }
    if (req.body.addMetadata) {
      req.body.addMetadata.forEach(async (data) => {
        const trackMetadata = await Metadata.findAll({
          where: { id: data.metadataId }
        })
        await track[0].addMetadata(trackMetadata)
      })
    }
    if (req.body.removeNeeds) {
      req.body.removeNeeds.forEach(async (need) => {
        const trackNeed = await Need.findAll({
          where: {
            id: need.needId
          }
        })
        await track[0].removeNeed(trackNeed)
      })
    }
    if (req.body.removeGenres) {
      req.body.removeGenres.forEach(async (genre) => {
        const trackGenre = await Genre.findAll({
          where: { id: genre.genreId }
        })
        await track[0].removeGenre(trackGenre)
      })
    }
    if (req.body.removeMetadata) {
      req.body.removeMetadata.forEach(async (data) => {
        const trackMetadata = await Metadata.findAll({
          where: { id: data.metadataId }
        })
        await track[0].removeMetadata(trackMetadata)
      })
    }
    res.send(updatedTrack)
  } catch (error) {
    throw error
  }
}

const DestroyTrack = async (req, res) => {
  try {
    let trackId = parseInt(req.params.track_id)
    await Track.destroy({ where: { id: trackId } })
    res.send({ message: `Track with id of ${trackId} has been removed.` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllTracks,
  GetTrack,
  CreateTrack,
  UpdateTrack,
  DestroyTrack
}
