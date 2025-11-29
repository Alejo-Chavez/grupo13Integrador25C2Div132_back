import connection from "../database/db.js"; 

export const selectAllProducts = () => {

    const sql = "SELECT * FROM productos";
    return connection.query(sql);

}

export const selectProductById = (id)=>{

    const sql = "SELECT * FROM productos where id = ?";
    return connection.query(sql, [id]);

}

export const insertProduct = (nombre, precio, categoria, img) =>{
    const sql = "INSERT INTO productos (nombre, precio, categoria, img) VALUES (?, ?, ?, ?)";
    return connection.query(sql,[nombre, precio, categoria, img]);
}
