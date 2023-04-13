const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const user = require('./user')

const postSchema = mongoose.Schema({
    caption: { type: String },
    desc: { type: String },
    user: { type: String, required: true },
    time: { type: Date, default: Date.now },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    image_url: { type: String }
    
    
})

module.exports = mongoose.model('post', postSchema)