/* Using mongoose to connect with MongoDB */

// Required Modules
const mongoose   = require('mongoose')
const { Schema } = mongoose;
const Post = require('./post.js')


const v = mongoose.connect('mongodb://localhost:27017/social_media', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
v.then(console.log("DB connected"))

const UserSchema = new Schema({

    username: {
        type: String,
        required: true,
        trim: true
    },
    
    bio: {
        type: String,
        required: true,
        trim: true
    },
    id:{
        
    }

    profile_pic: {
        type: String,
        required: true,
    },
})


// Creating model "User" from "UserSchema"
const profile = mongoose.model('profile', UserSchema)


// Exporting Model
module.exports = profile