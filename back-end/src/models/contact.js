const Sequelize = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class contact extends Sequelize.Model {}
  contact.init(
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
  const phoneNumber = sequelize.import(__dirname + '/phoneNumber.js')
  contact.hasMany(phoneNumber)
  return contact
}
