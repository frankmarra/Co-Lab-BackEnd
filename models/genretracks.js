'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class GenreTracks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GenreTracks.init(
    {
      genreId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'genres',
          key: 'id'
        }
      },
      trackId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'tracks',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'GenreTracks',
      tableName: 'genretracks'
    }
  )
  return GenreTracks
}
