const express=require('express')
const ProductApi=require('./api/productapi')
const app=express();
app.use(express.json());
ProductApi(app);
app.listen(3001,()=>console.log('server started'))