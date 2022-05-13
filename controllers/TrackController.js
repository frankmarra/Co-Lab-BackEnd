const { Track, Need, Metadata, Genre, User } = require('../models')
const genre = require('../models/genre')
const metadata = require('../models/metadata')
const need = require('../models/need')
const { Op } = require('sequelize')

const GetAllTracks = async (req, res) => {
  try {
    const tracks = await Track.findAll({
      include: 'userTrack',
      attributes: ['userName', 'userEmail']
    })
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
        },
        {
          model: 'userTrack'
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
    let track = await Track.findAll({
      where: { id: trackId },
      include: [
        { association: 'needs', through: { attributes: [] } },
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
    if (track[0].needs.length > 0) {
      track[0].needs.forEach((need) => track[0].removeNeed(need))
    }
    if (track[0].genres.length > 0) {
      track[0].genres.forEach((genre) => track[0].removeGenre(genre))
    }
    if (track[0].metadata.length > 0) {
      track[0].metadata.forEach((data) => track[0].removeMetadata(data))
    }
    await Track.destroy({ where: { id: trackId } })
    res.send({ message: `Track with id of ${trackId} has been removed.` })
  } catch (error) {
    throw error
  }
}

const SearchTrackByName = async (req, res) => {
  let searchQuery = req.query.word
  try {
    const tracks = await Track.findAll({
      where: {
        trackName: {
          [Op.iLike]: '%' + searchQuery + '%'
        }
      }
    })
    res.send(tracks)
  } catch (error) {
    throw error
  }
}

const SearchTrack = async (req, res) => {
  let searchGenres
  let searchMetadata
  let searchNeeds
  if (!req.query.genres || req.query.genres == 0 || req.query.genres == []) {
    searchGenres = 0
  } else if (req.query.genres.length == 1) {
    searchGenres = parseInt(req.query.genres)
  } else {
    searchGenres = []
    req.query.genres.forEach((genre) => {
      genre = parseInt(genre)
      searchGenres.push(genre)
    })
  }
  if (
    !req.query.metadata ||
    req.query.metadata == 0 ||
    req.query.metadata == []
  ) {
    searchMetadata = 0
  } else if (req.query.metadata.length == 1) {
    searchMetadata = parseInt(req.query.metadata)
  } else {
    searchMetadata = []
    req.query.metadata.forEach((data) => {
      data = parseInt(data)
      searchMetadata.push(data)
    })
  }
  if (!req.query.needs || req.query.needs == 0 || req.query.needs == []) {
    searchNeeds = 0
  } else if (req.query.needs.length == 1) {
    searchNeeds = parseInt(req.query.needs)
  } else {
    searchNeeds = []
    req.query.needs.forEach((need) => {
      need = parseInt(need)
      searchNeeds.push(need)
    })
  }

  if (searchNeeds != 0 && searchMetadata == 0 && searchGenres == 0) {
    try {
      const tracks = await Track.findAll({
        include: [
          {
            association: 'needs',
            where: { id: searchNeeds },
            through: { attributes: [] }
          },
          {
            association: 'userTrack'
          }
        ]
      })
      res.send(tracks)
    } catch (error) {
      throw error
    }
  }
  if (searchNeeds == 0 && searchMetadata != 0 && searchGenres == 0) {
    try {
      const tracks = await Track.findAll({
        include: [
          {
            association: 'metadata',
            where: { id: searchMetadata },
            through: { attributes: [] }
          },
          {
            association: 'userTrack'
          }
        ]
      })
      res.send(tracks)
    } catch (error) {
      throw error
    }
  }
  if (searchNeeds == 0 && searchMetadata == 0 && searchGenres != 0) {
    try {
      const tracks = await Track.findAll({
        include: [
          {
            association: 'genres',
            where: { id: searchGenres },
            through: { attributes: [] }
          },
          {
            association: 'userTrack'
          }
        ]
      })
      res.send(tracks)
    } catch (error) {
      throw error
    }
  }
  if (searchNeeds != 0 && searchMetadata != 0 && searchGenres == 0) {
    try {
      const tracks = await Track.findAll({
        include: [
          {
            association: 'needs',
            where: { id: searchNeeds },
            through: { attributes: [] }
          },
          {
            association: 'metadata',
            where: { id: searchMetadata },
            through: { attributes: [] }
          },
          {
            association: 'userTrack'
          }
        ]
      })
      res.send(tracks)
    } catch (error) {
      throw error
    }
  }
  if (searchNeeds != 0 && searchMetadata == 0 && searchGenres != 0) {
    try {
      const tracks = await Track.findAll({
        include: [
          {
            association: 'needs',
            where: { id: searchNeeds },
            through: { attributes: [] }
          },
          {
            association: 'genres',
            where: { id: searchGenres },
            through: { attributes: [] }
          },
          {
            association: 'userTrack'
          }
        ]
      })
      res.send(tracks)
    } catch (error) {
      throw error
    }
  }
  if (searchNeeds == 0 && searchMetadata != 0 && searchGenres != 0) {
    try {
      const tracks = await Track.findAll({
        include: [
          {
            association: 'genres',
            where: { id: searchGenres },
            through: { attributes: [] }
          },
          {
            association: 'metadata',
            where: { id: searchMetadata },
            through: { attributes: [] }
          },
          {
            association: 'userTrack'
          }
        ]
      })
      res.send(tracks)
    } catch (error) {
      throw error
    }
  }
  if (searchNeeds != 0 && searchMetadata != 0 && searchGenres != 0) {
    try {
      const tracks = await Track.findAll({
        include: [
          {
            association: 'needs',
            where: { id: searchNeeds },
            through: { attributes: [] }
          },
          {
            association: 'genres',
            where: { id: searchGenres },
            through: { attributes: [] }
          },
          {
            association: 'metadata',
            where: { id: searchMetadata },
            through: { attributes: [] }
          },
          {
            association: 'userTrack'
          }
        ]
      })
      res.send(tracks)
    } catch (error) {
      throw error
    }
  }
}

module.exports = {
  GetAllTracks,
  GetTrack,
  CreateTrack,
  UpdateTrack,
  DestroyTrack,
  SearchTrackByName,
  SearchTrack
}
