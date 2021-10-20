// Router for Login Requests
const express = require('express')
const router  = new express.Router()
const User    = require('../models/user.js')


// POST Requests
router.post('/login', (req,res) => {

    console.log('/n/nPost request recieved - /login')

    User.findOne({  username:req.body.username,password:req.body.password}, (error,value) => {

                if(value!=null){
                    console.log("Logged In")
                    res.send("Logged In")
                }    
                else{
                    console.log("No User Found")
                    res.send("No User Found")
                }
            
            })
    
})


// Exports
module.exports = router