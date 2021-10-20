// Router for Post Requests
const express = require('express')
const router  = new express.Router()
const User    = require('../models/user.js')


// GET Requests
router.get('/user/posts', (req,res) => {

    console.log('request recieved - /user/post')
    
    const user = User.findbyId(req.id, (error){
        if(error){
            console.log("Not Found")
        }
    })
    return user 
})


// POST Requests
router.post('/', (req,res) => {
    const user = new User(req.body)
    user.save()
    res.send("User Added")
})


// Exports
module.exports = router