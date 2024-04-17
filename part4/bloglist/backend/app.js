const blogRouter = require('./src/collections/blogs')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const logger = require('./src/utils/logger')
const config = require('./src/utils/config')



mongoose.set('strictQuery', false)

logger.info('connecting to', config.MONGODB_URL)

mongoose.connect(config.MONGODB_URL)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.json())
app.use('/api/blogs', blogRouter)

module.exports = app
