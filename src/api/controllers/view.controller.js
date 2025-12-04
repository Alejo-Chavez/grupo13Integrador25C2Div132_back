import { deleteProductById, insertProduct, selectAllProducts, selectProductById, updateProduct } from "../models/products.model.js";

export const productsView = async (req, res) => {

    try {
        const [rows] = await selectAllProducts();
        res.render("index", {
            title: "Inicio",
            about: "Listado principal",
            productos: rows
        });

    } catch (error) {
        console.error(error);
    }
};

export const productById = async (req, res) => {
    try {
        await selectProductById();
        res.render("consultar",{
            title: "Consultar",
            about: "Consultar producto por ID",
            
        });
    } catch (error) {
        console.error(error);
    }
};

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

export const modifyProduct = async (req, res) => {
    try {
        await updateProduct();
        res.render("modificar",{
            title: "Modificar",
            about: "Modificar producto"
        });
    } catch (error) {
        console.error(error);
    }
};

export const deleteProduct = async (req, res) => {
    try {
        
        await deleteProductById();
       
        res.render("eliminar", {
            title: "Eliminar",
            about: "Eliminar producto"
        })
    } catch (error) {
        console.error(error);      
    }
};