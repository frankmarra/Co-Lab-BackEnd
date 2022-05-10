'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Metadata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Metadata.belongsToMany(models.Track, {
        through: models.MetadataTracks,
        as: 'track_metadata',
        foreignKey: 'metadataId'
      })
    }
  }
  Metadata.init(
    {
      metadataName: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Metadata',
      tableName: 'metadata'
    }
  )
  return Metadata
}
