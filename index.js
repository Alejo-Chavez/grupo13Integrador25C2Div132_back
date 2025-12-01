import express from "express";
import cors from "cors";
import { loggerURL} from "./src/api/middlewares/middlewares.js";
const app = express();

import environments from "./src/api/config/environments.js";
import { productRoutes } from "./src/api/routes/index.js";

const PORT = environments.PORT;

//MIDDLEWARES
app.use(cors());
app.use(express.json()); // ESTO PARSEA EL JSON Q ME ENVIA el cliente
app.use(loggerURL);


app.use("/api/productos", productRoutes);


//ESCUCHAR EL PUERTO
app.listen(PORT, () => {
    console.log(`Servidor corriendo desde el puerto ${PORT}`)
});