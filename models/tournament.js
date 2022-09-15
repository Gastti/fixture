'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tournament extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tournament.belongsTo(models.Fixture, { foreignKey: 'fixtureId' });
      Tournament.hasMany(models.Group, { foreignKey: 'tournamentId', as: 'groups' });
    }
  }
  Tournament.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    fixtureId: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Tournament',
    paranoid: true
  });
  return Tournament;
};