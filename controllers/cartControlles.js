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

        let cart = await cart.findOne({user:userId})

        if(!cart) await cart.create({user , item:[]})

// Add product Or Updated quality
const itemIndex = cart.items.findIndex(item => {
    item.product.equal(productId);
}) 

if(itemIndex > -1)
    {
        cart.item(itemIndex).quantity = quantity+1
    } 
else
{
    cart.item.push({product:productId , quantity})
}

// await cart.save();
// product.stock=>quantity;
// await product.save();

// res.status(201).json{(
//     msg:"done add product" , data: cart 
// )};

//     }
//     catch(error)
//     {
// res.status(500).json{("server error")}

//     }


// }
await cart.save();
        productId.stockQuantity -= quantity ;
        return res.status(201).json({message : 'Product added to cart', data : cart})

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