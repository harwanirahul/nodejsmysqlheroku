const dbConnection=require('../connections/dbConnection')
const queries=require('../queries/dbqueries')

module.exports=class ProductRepository{
    async saveProduct(product){
        
        let con=await dbConnection();
        try{
            await con.query('START TRANSACTION');
            let savedProduct= await con.query(queries.INSERT_PRODUCT,
                [product.productid,product.productName,product.price,product.description])
            await con.query('COMMIT')
            product.productid=savedProduct.productid
            return product;


        }catch(ex){
            await con.query('ROLLBACK')
            throw ex;
        }finally{
            await con.release();
            await con.destroy();
        }

    }
    async updateProduct(product){
      
        let con=await dbConnection();
        try{
            await con.query('START TRANSACTION');
            let updateProduct= await con.query(queries.UPDATE_PRODUCTS,
                [product.price,product.productid]
                )
            await con.query('COMMIT')
            product.productid=updateProduct.productid
            return product;


        }catch(ex){
            await con.query('ROLLBACK')
            throw ex;
        }finally{
            await con.release();
            await con.destroy();
        }

    }
    async deleteProduct(productid){
      
        let con=await dbConnection();
        try{
            await con.query('START TRANSACTION');
            let deleteProduct= await con.query(queries.DELETE_PRODUCTS,
                [productid]
                )
            await con.query('COMMIT')
            


        }catch(ex){
            await con.query('ROLLBACK')
            throw ex;
        }finally{
            await con.release();
            await con.destroy();
        }

    }
    async findallProduct(productid){
      
        let con=await dbConnection();
        try{
            await con.query('START TRANSACTION');
            let Product= await con.query(queries.FETCH_PRODUCTS)
            await con.query('COMMIT')
            return JSON.parse(JSON.stringify(Product));
            


        }catch(ex){
            await con.query('ROLLBACK')
            throw ex;
        }finally{
            await con.release();
            await con.destroy();
        }

    }
    async findallProductbyname(productName){
      
        let con=await dbConnection();
        try{
            await con.query('START TRANSACTION');
            let allProduct= await con.query(queries.SEARCH_BY_NAME,[productName])
            await con.query('COMMIT')
           // product.productName=updateProduct.productName
            return JSON.parse(JSON.stringify(allProduct));
            


        }catch(ex){
            await con.query('ROLLBACK')
            throw ex;
        }finally{
            await con.release();
            await con.destroy();
        }

    }


}