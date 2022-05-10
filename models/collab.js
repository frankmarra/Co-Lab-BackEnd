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
        through: models.UserCollabs,
        as: 'collab_number',
        foreignKey: 'collabId'
      })
      Collab.belongsTo(models.Track, {
        foreignKey: 'trackId',
        as: 'collab',
        onDelete: 'CASCADE'
      })
    }
  }
  Collab.init(
    {
      collabComplete: DataTypes.BOOLEAN,
      trackId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'trackId',
        onDelete: 'CASCADE',
        references: {
          model: 'tracks',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Collab',
      tableName: 'collabs'
    }
  )
  return Collab
}
