const Sequelize = require('sequelize')
const Model = Sequelize.Model
class Contact extends Model {}
module.exports.init = function init(sequelize) {
  Contact.init(
    {
      // attributes createdAt,updatedAt  is automatic added by Sequelize
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      }
    },
    {
      sequelize
    }
  )
}
