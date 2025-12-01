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


export const deleteProductById = (id) =>{
    const sql = "UPDATE productos SET activo = 0 WHERE id = ?";
    return connection.query(sql,[id]);
}

export const updateProduct = (nombre, img, precio, categoria, activo, id) =>{
    const sql = "UPDATE productos SET nombre = ?, img = ?, precio = ?, categoria = ?, activo = ? WHERE id = ?";
    const params = [nombre, img, precio, categoria, activo, id];
    
    console.log("🔍 PARÁMETROS:", params); //BORRAR era para testear pq no funcionaba bien
    
    return connection.query(sql, params);
}
