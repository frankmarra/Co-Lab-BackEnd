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
      trackLikes: DataTypes.INTEGER,
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
      },
      collabId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'collabId',
        onDelete: 'CASCADE',
        references: {
          model: 'collabs',
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
