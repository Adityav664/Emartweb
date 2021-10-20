// Router for User Requests
const express = require('express')
const router  = new express.Router()
const User    = require('../models/user.js')
const mongoose   = require('mongoose')


// GET Requests
router.get('/user', (req,res) => {

    console.log('request recieved - /user')
    const user = User.findbyId(req.body.id, (error) => {  
        if(error){
            console.log("Not Found")
        }
    })
    return user 
})

router.get('/', (req,res, next) => {
    User.find({friends:'pratyush_551'})
    .then((result)=>{
     res.status(200).json({
      friendsData: result
     });

});


router.post('/', (req,res,next) => {
    const friends = new User ( req.body
      /*  _id:new mongoose.Types.ObjectId
        username:req.body.friendsData,*/
         )
         friends.save()
         .then(result=>{
             console.log(result);
         })
         .then(result=>{
            res.status (200).json({
             friendsData: result
            });
        })
      .catch((err)=>
            console.log(err))
           /* res.status(500).json({
                error:err
                  })*/
        })


router.get('/user/posts', (req,res) => {

    console.log('request recieved - /user/posts')
    
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
