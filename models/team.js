'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Team.belongsTo(models.Group, { foreignKey: 'groupId' });
    }
  }
  Team.init({
    name: DataTypes.STRING,
    icon: DataTypes.STRING,
    location: DataTypes.STRING,
    groupId: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Team',
    paranoid: true
  });
  return Team;
};