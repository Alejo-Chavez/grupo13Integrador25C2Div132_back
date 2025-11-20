import express, { json } from "express";
import cors from "cors";
const app = express();

import environments from "./src/api/config/environments.js";
import { getAllProducts, getProductsById } from "./src/api/controllers/product.controllers.js";

const PORT = environments.PORT;

//MIDDLEWARES ----------------------------------------------------------------------

app.use(cors());
app.use(express.json());

//Endpoints--------------------------------------------------------------------------

app.get('/productos', getAllProducts);
app.get('/productos/:id', getProductsById);
//app.post
//app.put
//app.delete


app.listen(PORT, () => {
    console.log(`Servidor corriendo desde el puerto ${PORT}`)
});