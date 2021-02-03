const ProductRepository=require('../repository/productRepository')
const repository=new ProductRepository();
const ProductApi=(app)=>{
app.get('/products',(req,res)=>{
    repository.findallProduct().then(products=>res.json(products));
})
app.post('/products',(req,res)=>{
    const {productid,productName,price,description} = req.body
    repository.saveProduct({productid,productName,price,description}).then(product=>res.json(product)) 
    
})
app.put('/products/:productid',(req,res)=>{
    const {price} = req.body
    repository.updateProduct({productid:req.params['productid'],price:price})
    .then(product=>res.json(product)) 
    
})
app.delete('/products/:productid',(req,res)=>{
    
    repository.deleteProduct(req.params['productid'])
    .then(value=>res.json({'message':value}) )
    
})
}
module.exports = ProductApi