const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middlewares/errorMiddlerware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000

// Connect to database
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/posts', require('./routes/postRoutes'))

// app.use('/', (req, res) => {
//   console.log('This is main url')
// })

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`.cyan.underline)
})
