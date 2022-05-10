const { Track } = require('../models')

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
    const track = await Track.findByPk(trackId)
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
