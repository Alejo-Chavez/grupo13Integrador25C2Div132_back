import { insertTicket } from "../models/ticket.models.js";

export const createTicket = async (req, res) => {
    try {
        const { nombre_usuario, total, productos } = req.body;

        if (!nombre_usuario || !total || !productos || !Array.isArray(productos)) {
            return res.status(400).json({ 
                error: "Datos incompletos. Se requiere: nombre_usuario, total y array productos" 
            });
        }
        if (productos.length === 0) {
            return res.status(400).json({ 
                error: "El carrito está vacío" 
            });
        }
       
        const [result] = await insertTicket({ nombre_usuario, total });
        
        const factura = {
            id: result.insertId,
            nombre_usuario,
            total,
            fecha: new Date().toISOString(),
            productos: productos
        };

        res.status(201).json({
            success: true,
            message: "Compra registrada exitosamente",
            factura: factura
        });

    } catch (error) {
        console.error("Error en createTicket:", error);
        
        // Errores específicos
        if (error.code === 'ER_DATA_TOO_LONG') {
            return res.status(400).json({ 
                error: "Nombre de usuario muy largo (máximo 16 caracteres)" 
            });
        }
        
        res.status(500).json({ 
            error: "Error interno del servidor al procesar la compra"
        });
    }
};