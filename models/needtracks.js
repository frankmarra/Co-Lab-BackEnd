'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class NeedTracks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NeedTracks.init(
    {
      needId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'needs',
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
      modelName: 'NeedTracks',
      tableName: 'needtracks'
    }
  )
  return NeedTracks
}
