module.exports={
    INSERT_PRODUCT:`INSERT INTO products VALUES(?,?,?,?)`,
    FETCH_PRODUCTS:`SELECT * FROM products`,
    UPDATE_PRODUCTS:`UPDATE products SET price=? WHERE productid=?`,
    DELETE_PRODUCTS:`DELETE FROM products where productid=?`,
    SEARCH_BY_NAME:`SELECT * FROM products where productName=?`
}