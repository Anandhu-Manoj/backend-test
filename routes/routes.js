const express=require('express')
const productController=require('..//controllers/productControllers')
const router=new express.Router()
router.post('/add',productController,)
module.exports=router