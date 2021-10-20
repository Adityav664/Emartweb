// Router for Register Requests
const express = require('express')
const router  = new express.Router()
const User    = require('../models/user.js')


// POST Requests
router.post('/register', (req,res) => {

    console.log('Post request recieved - /register')



    // Checking if username is already taken
    const username_check = () => {

        User.findOne( {username:req.body.username}, (error,value) => {

            // If username is present
            if(value!=null){
                console.log("Username is present")
                res.send("Username Taken")
            }
            else{
                console.log("Username is not present")
                const user = new User(req.body)
                user.save()
                res.send("User Registered") 
            }
            
        })
 
    }

    
    // Calling the function
    username_check()

})


// Exports
module.exports = router