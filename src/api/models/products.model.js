import connection from "../database/db.js"; 

export const selectAllProducts = () => {

    const sql = "SELECT * FROM productos";
    return connection.query(sql);

}

export const selectProductById = (id)=>{

    const sql = "SELECT * FROM productos where id = ?";
    return connection.query(sql, [id])

}
