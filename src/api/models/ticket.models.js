import connection from "../database/db.js";

export const insertTicket = async ({ nombre_usuario, total }) => {
    const sql = `INSERT INTO ventas (nombre_usuario, total, fecha) 
                 VALUES (?, ?, NOW())`;
    return await connection.query(sql, [nombre_usuario, total]);
};

export const insertTicketProduct = (venta_id, producto_id, precio, cantidad) => {
    const sql = `INSERT INTO venta_productos (venta_id, producto_id, precio, cantidad) 
                 VALUES (?, ?, ?, ?)`;
    return connection.query(sql, [venta_id, producto_id, precio, cantidad]);
};