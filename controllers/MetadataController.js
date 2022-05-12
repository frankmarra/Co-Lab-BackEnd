const { Metadata } = require('../models')

const GetAllMetadata = async (req, res) => {
  try {
    const metadata = await Metadata.findAll({
      order: [['id', 'ASC']],
      include: 'tracks'
    })
    res.send(metadata)
  } catch (error) {
    throw error
  }
}

const GetMetadata = async (req, res) => {
  try {
    let metadataId = parseInt(req.params.metadata_id)
    let metadata = await Metadata.findByPk(metadataId, { include: 'tracks' })
    res.send(metadata)
  } catch (error) {
    throw error
  }
}

const CreateMetadata = async (req, res) => {
  try {
    let newMetadata = {
      ...req.body
    }
    const metadata = await Metadata.create(newMetadata)
    res.send(metadata)
  } catch (error) {
    throw error
  }
}

const UpdateMetadata = async (req, res) => {
  try {
    let metadataId = parseInt(req.params.metadata_id)
    const updatedMetadata = await Metadata.update(req.body, {
      where: { id: metadataId },
      returning: true
    })
    res.send(updatedMetadata)
  } catch (error) {
    throw error
  }
}

const DestroyMetadata = async (req, res) => {
  try {
    let metadataId = parseInt(req.params.metadata_id)
    await Metadata.destroy({ where: { id: metadataId } })
    res.send({ message: `Metadata with id of ${metadataId} has been removed.` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllMetadata,
  GetMetadata,
  CreateMetadata,
  UpdateMetadata,
  DestroyMetadata
}
