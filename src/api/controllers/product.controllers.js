import { selectAllProducts, selectProductById } from "../models/products.model.js";


export const getAllProducts = async(req, res) => {

    try{

        const [rows] = await selectAllProducts();
        res.status(200).json({
            payload :rows,
            message :rows.length === 0 ? "No se encontraron productos" : "Productos encontrados"
        })

    }catch(error)
    {
        console.error("ERROR AL OBTENER LOS PRODUCTOS", error);
        res.status(500).json({ 
            message : "error al intentar obtener los productos en la bd"
        })
    }

}

export const getProductsById = async(req, res)=>{

    try {
        let {id} = req.params;
        const [rows] = await selectProductById(id);

        if(rows.length === 0) {
            console.log(`Error!! No existe producto con el id ${id}`);

            return res.status(404).json({
                message: `No se encontro producto con id ${id}`
            });
        }

        res.status(200).json({
            payload: rows
        });

    } catch (error) {
        console.error("ERROR INTERNO --AL INTENTAR OBTENER PRODUCTO POR ID",error);
        res.status
    }

}