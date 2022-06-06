const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add a email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    profilePicture: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('User', UserSchema)
