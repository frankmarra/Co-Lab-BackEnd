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
      Track.hasOne(models.Collab, {
        foreignKey: 'trackId',
        onDelete: 'CASCADE'
      })
      Track.belongsToMany(models.Genre, {
        through: models.GenreTracks,
        as: 'genres',
        foreignKey: 'trackId'
      })
      Track.belongsToMany(models.Need, {
        through: models.NeedTracks,
        as: 'needs',
        foreignKey: 'trackId'
      })
      Track.belongsToMany(models.Metadata, {
        through: models.MetadataTracks,
        as: 'metadata',
        foreignKey: 'trackId'
      })
    }
  }
  Track.init(
    {
      trackName: DataTypes.STRING,
      trackDescription: DataTypes.STRING,
      trackAudio: DataTypes.STRING,
      trackLikes: DataTypes.INTEGER,
      trackArt: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'userId',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      albumId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'albumId',
        onDelete: 'CASCADE',
        references: {
          model: 'albums',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Track',
      tableName: 'tracks'
    }
  )
  return Track
}
