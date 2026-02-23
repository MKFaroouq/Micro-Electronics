const mongoose = require('mongoose')

const productItem = new mongoose.Schema({
    products:
    {
        ref:'Products',
        type:mongoose.Schema.Types.ObjectId,
        require:true

    },

    quantity:{
        type:Number,
        min:1
    },

});


const CartSchema = new mongoose.Schema({
    user:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true

    },


    

    item: [productItem]


},{timestamps:true})

const Cart = mongoose.model('Cart',CartSchema)
module.exports = Cart