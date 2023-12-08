const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  ImageText: {
    type: String,
    required: true,
    trim: true,
  },
  Image:{
    type:String,
  },
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Array,
    default: 0,
  },
});

module.exports = mongoose.model('Post', postSchema);

