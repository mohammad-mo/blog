const mongoose = require('mongoose')

const PostSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'user',
    },
    author: {
      type: String,
      required: true,
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
    category: {
      type: String,
      enum: ['life', 'music', 'style', 'sport', 'cinema', 'tech', 'game'],
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('Post', PostSchema)
