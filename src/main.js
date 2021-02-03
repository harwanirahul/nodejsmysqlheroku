//const dbConnection=require('./connections/dbConnection');

//console.log(dbConnection().then(con=>console.log(con)))
const ProductRepository=require('./repository/productRepository')
const productRepository=new ProductRepository();
const main=async()=>{
    /*let savedProduct=await productRepository.saveProduct({
        productid:3,
        productName:'Iphonepromax',
        price:99956.5,
        description:'processor'
    })
    console.log('Saved Product--->',savedProduct);
    let updatedProduct=await productRepository.updateProduct({
        productid:2,
        productName:'Iphonepromax',
        price:99956.5,
        description:'processor'
    })
    console.log('Updated Product--->',updatedProduct);*/
    //let deleteProduct=await productRepository.deleteProduct(2)
   // console.log('Delete Product--->',deleteProduct);
   // const products=await productRepository.findallProduct();
    //console.log('Products List  ',products)
    const products=await productRepository.findallProductbyname('Iphone12');
    console.log('Products List  ',products)
}
main();