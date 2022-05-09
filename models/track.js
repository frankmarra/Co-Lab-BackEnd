'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Track extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Track.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'userTrack',
        onDelete: 'CASCADE'
      })
      Track.belongsTo(models.Album, {
        foreignKey: 'albumId',
        as: 'albumTrack',
        onDelete: 'CASCADE'
      })
      Track.belongsTo(models.Collab, {
        foreignKey: 'collabId',
        as: 'collabTrack'
      })
      Track.belongsToMany(models.Genre, {
        through: 'GenreTracks'
      })
      Track.belongsToMany(models.Need, {
        through: 'NeedTracks'
      })
      Track.belongsToMany(models.Metadata, {
        through: 'MetadataTracks'
      })
    }
  }
  Track.init(
    {
      trackName: DataTypes.STRING,
      trackDescription: DataTypes.STRING,
      trackAudio: DataTypes.STRING,
      trackLikes: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Track',
      tableName: 'tracks'
    }
  )
  return Track
}
