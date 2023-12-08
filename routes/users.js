const mongoose = require('mongoose');
const plm=require('passport-local-mongoose');


mongoose.connect("mongodb+srv://rupakkapoor07:3qWFJ@cluster7.jssz8lo.mongodb.net/");


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
  dp: {
    type: String, // Assuming you store the path or URL of the user's profile picture
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  fullname: {
    type: String,

    trim: true,
  },
});

userSchema.plugin(plm);
module.exports= mongoose.model('User', userSchema);


