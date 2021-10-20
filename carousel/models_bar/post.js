const mongoose   = require('mongoose')
const { Schema } = mongoose;


const v = mongoose.connect('mongodb://localhost:27017/social_media', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
v.then(console.log("DB connected"))

const UserSchema = new Schema({

    photo: {
        type: String,
    },
    
    caption: {
        type: String,
        required: true,
        trim: true
    },

    likes: {
        type: Number,
        default: 0
    },

    comments: {
        type: []
    },

    shares: {
        type: Number,
        default: 0
    }

})
   
// Creating model "User" from "UserSchema"
const Post = mongoose.model('Post', UserSchema)

// Exporting Model
module.exports = Post