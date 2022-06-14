const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middlewares/error')
const connectDB = require('./config/db')
const path = require('path')
const cors = require('cors')
const compression = require('compression')
const PORT = process.env.PORT

// Connect to database
connectDB()

const app = express()

app.use(compression())
app.use(cors())
app.use(express.json({ limit: '5mb' }))
app.use(express.urlencoded({ limit: '5mb', extended: true }))

// Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/posts', require('./routes/postRoutes'))
app.use('/api/category', require('./routes/categoryRoutes'))

// Serve Frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html')),
  )
} else {
  app.get('/', (req, res) => {
    res.status(200).json({
      message: 'Welcome to the mern blog api.',
    })
  })
}

app.use(errorHandler)

app.listen(PORT || 5000, () => {
  console.log(`Server started on port ${PORT}`.cyan.underline)
})
