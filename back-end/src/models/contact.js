const Sequelize = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Contact extends Sequelize.Model {}
  Contact.init(
    {
      // attributes createdAt,updatedAt  is automatic added by Sequelize
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize
    }
  )
  return Contact
}
