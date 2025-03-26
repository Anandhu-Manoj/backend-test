const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    prodoctId:{
        type:String,
        required:true,
        unique:true

    },
    productDetails:{
        type:String,
        required:true,

    }
})
const products=mongoose.model('products',productSchema)
module.exports= products