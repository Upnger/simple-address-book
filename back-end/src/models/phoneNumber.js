const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class phoneNumber extends Sequelize.Model {}
  phoneNumber.init(
    {
      // attributes createdAt,updatedAt  is automatic added by Sequelize
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false
      },
      label: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      sequelize
    }
  )
  return phoneNumber
}
