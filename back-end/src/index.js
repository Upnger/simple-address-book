// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const Sequelize = require('sequelize')

const sequelizeConfig = {
  dialect: 'mysql',
  host: 'db',
  port: 3306,
  username: 'user',
  password: 'password',
  database: 'db'
}
const sequelize = new Sequelize(sequelizeConfig)
fastify.decorate('db', sequelize)
fastify.addHook('onClose', (fastifyInstance, done) => {
  sequelize
    .close()
    .then(done)
    .catch(done)
})
require('./contact.js').init(sequelize)
fastify.db
  .authenticate()
  .then(() => {
    fastify.log.info('Connection has been established successfully.')
    // sync is not suited for production and even less so together with force set to true
    fastify.db.sync({ force: true })
  })
  .catch(err => {
    fastify.log.error('Unable to connect to the database:', err)
    process.exit(1)
  })

const phoneNumberExample = {
  id: 1,
  phoneNumber: '+460738021936',
  labels: ['home']
}

const addressExample = 'Tingbergsgatan 15 65229 Karlstad'

const contactExample = {
  firstName: 'Robin',
  lastName: 'Persson',
  phoneNumbers: [phoneNumberExample],
  addresses: [addressExample]
}

// get all contacts
// return a array with contacts
fastify.get('/contact', async () => {
  return fastify.db.models.Contact.findAll()
})

// get a specific contact
// return a contact
fastify.get('/contact/:contactId', async (request, reply) => {
  const contact = await fastify.db.models.Contact.findByPk(
    request.params.contactId
  )
  if (contact) {
    return contact
  } else {
    reply.code(404)
    return ''
  }
})

// create a new contact
// return the new contact
fastify.post('/contact', async (request, reply) => {
  reply.code(501)
  return contactExample
})

// Update a existing contact
// return the updated contact
fastify.put('/contact', async (request, reply) => {
  reply.code(501)
  return contactExample
})

const start = async () => {
  try {
    await fastify.listen(3000, '0.0.0.0')
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
