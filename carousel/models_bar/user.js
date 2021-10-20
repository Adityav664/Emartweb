/* Using mongoose to connect with MongoDB */

// Required Modules
const mongoose   = require('mongoose')
const { Schema } = mongoose;
const validator  = require('validator')


const connection = mongoose.connect('mongodb://localhost:27017/social_media', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
connection.then(console.log("DB connected"))

const UserSchema = new Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is Invalid")
            }
        }
    },

    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7
    },
    
    age: {
        type: Number,
        default: 10,
        validate(value){
            if(value<10){
                throw new Error("Age cannot be Negative")
            }
        }
    },
    username:{
        type: String,
        
    }

})


// Creating model "User" from "UserSchema"
const User = mongoose.model('User', UserSchema)


// Exporting Model
module.exports = User