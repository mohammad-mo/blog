const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middlewares/errorMiddlerware')
const connectDB = require('./config/db')
const multer = require('multer')
const PORT = process.env.PORT || 5000

// Connect to database
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/posts', require('./routes/postRoutes'))
app.use('/api/category', require('./routes/categoryRoutes'))

// Storing image
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'back-end/images')
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name)
  },
})

const upload = multer({ storage })
app.post('/api/uploads', upload.single('file'), (req, res) => {
  res.status(200).json('File has been uploaded')
})

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`.cyan.underline)
})
