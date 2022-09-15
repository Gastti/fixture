'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Match extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Match.belongsTo(models.Group);
      Match.hasOne(models.Stage, { foreignKey: 'stageId' });
      Match.hasMany(models.TeamMatch, { foreignKey: 'matchId' });
    }
  }
  Match.init({
    location: DataTypes.STRING,
    time: DataTypes.DATE,
    date: DataTypes.DATE,
    groupId: DataTypes.INTEGER,
    stageId: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Match',
    paranoid: true
  });
  return Match;
};