require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require("mongoose")    
const bcrypt = require("bcrypt")


app.use(express.json())

const port = process.env.PORT || 3000

async function main(){
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to DB")
    }
    catch(err){
        console.log(err)
    }
}
main()

// app.listen(port, () => {
//   console.log(`listening on port ${port}`)
// })

//dbConnection();

// require models
const User = require("./models/Users")

app.post("regestire" , async (req , res)=>
{
    try
    {
        // get data
        const  {username , email , password , role} = req.body
        // valitade data
        if ( !username || !email || !password || !role ) 
        return res.status(400).json({msg:"invaild data"})
        // create new user
        // response
    }
    catch(error) 
    { 
        
    }

    app.post("./login" , async(req,res) =>{
        try {
            const{email , password} req.body;
            if(!email || password)
                return res.status(400).json({msg:"missing data"})

        }
    })
    catch(error) 
    

    const existUser = await User.findOne({email})
    
    if (existUser) 
        return res.status(400).json({msg:"account already exist"})

    const hashpass = await bcrypt.hash(pass,10)

    const user = await User.create({
        username,
        email,
        password:hashpass,
        role,
    })

    res.status(201).json({
        msg:"done created user",
        data:user,
    })

    app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
})