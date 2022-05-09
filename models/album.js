'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Album.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'album',
        onDelete: 'CASCADE'
      })
      Album.hasMany(models.Track, {
        foreignKey: 'albumId',
        onDelete: 'CASCADE'
      })
    }
  }
  Album.init(
    {
      albumName: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Album',
      tableName: 'albums'
    }
  )
  return Album
}
