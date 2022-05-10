'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class MetadataTracks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MetadataTracks.init(
    {
      metadataId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'metadata',
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
      modelName: 'MetadataTracks',
      tableName: 'metadatatracks'
    }
  )
  return MetadataTracks
}
