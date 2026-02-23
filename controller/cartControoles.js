const Product = require("../models/Products")
const Cart = require("../models/cart")
const User = require("../models/User")



const addCartController = async (res,req)=>
{
    try
    {
        // get data
        const {userId , productId , quantity}=req.body
        // validated data
        if(!userId , !productId , !quantity)
            return res.status(400).json({msg:"missing data"})

        const user= await User.findById(userId)

        if(!user) return res.status(400).json ({msg:"user not found"})

        const product= await User.findById(userId)

        if(!product) return res.status(400).json ({msg:"product not found"})

        if (quantity > product.stock) 
            return res.json({msg:"quanity large stock"})

        let cart = await cart.find({user:userId})

        if(!cart) await cart.create({user , item:[]})


    }
    catch(error)
    {


    }


}


const getCartController = async (res,req)=>
{
    try{


    }
    catch(error)
    {

        
    }


}


const removeItemController = async (res,req)=>
{
    try{


    }
    catch(error)
    {

        
    }


}