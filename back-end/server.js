const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middlewares/errorMiddlerware')
const connectDB = require('./config/db')
const multer = require('multer')
const path = require('path')
const cors = require('cors')
const PORT = process.env.PORT

// Connect to database
connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/images', express.static(path.join(__dirname, '/images')))

// Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/posts', require('./routes/postRoutes'))
app.use('/api/category', require('./routes/categoryRoutes'))

// Storing image
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './back-end/images')
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name)
  },
})

const upload = multer({ storage })
app.post('/api/uploads', upload.single('file'), (req, res) => {
  res.status(200).json('File has been uploaded')
})

// Serve Frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../front-end/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, '../front-end/build', 'index.html')),
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
