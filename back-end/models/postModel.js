const mongoose = require('mongoose')

const PostSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'user',
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    categories: {
      type: Array,
      required: false,
    },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('Post', PostSchema)
