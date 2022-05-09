'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Need extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Need.belongsToMany(models.Track, {
        through: 'NeedTracks'
      })
    }
  }
  Need.init(
    {
      needName: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Need',
      tableName: 'needs'
    }
  )
  return Need
}
