'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Track, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      })
      User.hasMany(models.Album, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      })
      User.belongsToMany(models.Collab, {
        through: models.UserCollabs,
        as: 'users',
        foreignKey: 'userId'
      })
    }
  }
  User.init(
    {
      userName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      userEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      userPasswordDigest: {
        type: DataTypes.STRING,
        allowNull: false
      },
      userPic: DataTypes.STRING,
      userSpotPlay: DataTypes.STRING,
      userCollabCount: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  )
  return User
}
