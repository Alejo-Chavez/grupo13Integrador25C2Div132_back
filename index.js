import express, { json } from "express";
import cors from "cors";
const app = express();

import environments from "./src/api/config/environments.js";
import { getAllProducts, getProductsById, postProduct, deleteProduct, modifyProduct } from "./src/api/controllers/product.controllers.js";

const PORT = environments.PORT;

//MIDDLEWARES ----------------------------------------------------------------------

app.use(cors());
app.use(express.json()); // ESTO PARSEA EL JSON Q ME ENVIA el cliente

//Endpoints--------------------------------------------------------------------------

app.get('/productos', getAllProducts);
app.get('/productos/:id', getProductsById);
app.post('/productos', postProduct)
app.put('/productos', modifyProduct)
app.put("/productos/:id", deleteProduct); //no hacemos delete, solo baja logica


app.listen(PORT, () => {
    console.log(`Servidor corriendo desde el puerto ${PORT}`)
});