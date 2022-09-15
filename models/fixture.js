'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fixture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Fixture.hasOne(models.Tournament, { foreignKey: 'fixtureId', as: 'tournament' });
      Fixture.belongsTo(models.User, { foreignKey: 'ownerId' });
    }
  }
  Fixture.init({
    name: DataTypes.STRING,
    ownerId: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Fixture',
    paranoid: true
  });
  return Fixture;
};