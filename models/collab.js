'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Collab extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Collab.belongsToMany(models.User, {
        through: 'UserCollabs'
      })
      Collab.hasOne(models.Track, {
        foreignKey: 'collabId'
      })
    }
  }
  Collab.init(
    {
      collabComplete: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: 'Collab',
      tableName: 'collabs'
    }
  )
  return Collab
}
