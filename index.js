require('dotenv').config() 
const express=require ('express')
const cors=require ('cors')
require('./dbConnection')


const pfserver=express()
pfserver.use(cors())
pfserver.use(express.json())

pfserver.get('/helloWorld',(req,res)=>{
    res.status(201).send('<h1>Hellow world</h1>')

})

const PORT=3000||process.env.PORT

pfserver.listen(PORT,()=>{
    console.log(`server running successfully in ${PORT} and waiting for client request`)
})



