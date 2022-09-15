'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TeamMatch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TeamMatch.hasOne(models.Team, { foreignKey: 'teamId' });
      TeamMatch.belongsTo(models.Match);
    }
  }
  TeamMatch.init({
    teamScore: DataTypes.INTEGER,
    teamId: DataTypes.INTEGER,
    matchId: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'TeamMatch',
    paranoid: true
  });
  return TeamMatch;
};