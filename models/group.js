'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Group.belongsTo(models.Tournament, { foreignKey: 'tournamentId' });
      Group.hasMany(models.Team, { foreignKey: 'groupId', as: 'teams' });
    }
  }
  Group.init({
    name: DataTypes.STRING,
    tournamentId: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Group',
    paranoid: true
  });
  return Group;
};