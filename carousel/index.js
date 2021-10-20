// Required Modules
const express = require('express')



// Router Specs
const Login_Router    = require('./router/login.js')
const Register_Router = require('./router/register.js')
const User_Router     = require('./router/user.js')


// Application Settings
const app  = express()
const port = process.env.port || 3000

app.use(express.json())
app.use(User_Router)
app.use(Register_Router)
app.use(Login_Router)


// Listening App
app.listen(port, (error) => {
    if(error){
        console.log("App Crashed")
    }
    else{
        console.log("App Started")
    }
})


app.get('/',(req,res) => {
    res.send("Home Page")
})


