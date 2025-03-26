
const products=require('../database/models/productModel');
exports.addController=async(res,req)=>{
    const {productName,productId,productDetails}=req.body;
    try {
        const existingProduct=await products.findOne({productName})
        console.log(existingProduct)
        if(existingProduct){
            res.status(409).json('Already existing used please login')
        }else{const newProduct=new products({productName,productId,productDetails})
         await newProduct.save()
         res.status(201).json(newProduct)} 
        
    } catch (err) {
        res.status(500).json(err)
        
    }
}