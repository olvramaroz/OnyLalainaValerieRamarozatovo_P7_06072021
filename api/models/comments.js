'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Comments.init({
    comment: { 
      type: DataTypes.TEXT 
    }, 
    UserId: { 
      allowNull: false, 
      type: DataTypes.INTEGER 
    }, 
    postId: { 
      allowNull: false, 
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Comments',
  });
  return Comments;
};