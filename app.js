const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
//use all 
app.use(express.static('./public'))

app.listen(port,()=>{
    console.log(`listerning at ${port}`);
})