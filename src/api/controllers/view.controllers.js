import { deleteProductById, insertProduct, selectAllProducts, selectProductById, updateProduct } from "../models/products.model.js";

export const productsView = async (req, res) => {
    try {
        const [rows] = await selectAllProducts();
        res.render("index",{
        title:"Dashboard",
        about:"Productos",
        productos: rows
    });
    } catch (error) {
        console.error(error)
    }
}

export const productById = (req, res) => {
    res.render("consultar",{
        title: "Consultar", 
        about: "Consultar producto por id:" 
    });
};

// Vista para crear productos
export const createProduct = async (req, res) => {
    try {
        await insertProduct(); 
        res.render("crear",{
            title: "Crear",
            about: "Crear producto"
        });
    } catch (error) {
        console.error(error);
    }  
};

// Vista para modificar productos
export const modifyProduct = (req, res) => {
    res.render("modificar",{
        title: "Modificar",
        about: "Actualizar producto"
    });
};

// Vista para borrar productos
export const deleteProduct = (req, res) => {
    res.render("eliminar",{
        title: "Eliminar",
        about: "Eliminar producto" 
    });
};
