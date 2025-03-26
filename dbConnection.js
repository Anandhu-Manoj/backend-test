const mongoose=require('mongoose')
const connectionstring=process.env.MONGODBCONNECTIONSTRING;

mongoose
.connect(connectionstring)
.then(()=>console.log('succesfully connected to mongo db atlas'))
.catch((err)=>{console.log("connection failed");
    console.log(err)
})
