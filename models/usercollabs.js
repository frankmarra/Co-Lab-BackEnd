'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class UserCollabs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserCollabs.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      collabId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'collabs',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'UserCollabs',
      tableName: 'usercollabs'
    }
  )
  return UserCollabs
}
