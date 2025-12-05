import express from "express";
import cors from "cors";
import { loggerURL} from "./src/api/middlewares/middlewares.js";
const app = express();

import environments from "./src/api/config/environments.js";
import { productRoutes, viewRoutes, ticketRoutes } from "./src/api/routes/index.js";
import { join, __dirname } from "./src/api/utils/index.js";


const PORT = environments.PORT;

//MIDDLEWARES
app.use(cors());
app.use(express.json()); // ESTO PARSEA EL JSON Q ME ENVIA el cliente
app.use(loggerURL);
app.use(express.static(join(__dirname, "src/public"))); //Sirve archivos estaticos
app.use(express.static("/src/public"));

app.use("/api/productos", productRoutes);
app.use("/api/tickets", ticketRoutes);
app.use("/",viewRoutes);

//Configurar EJS como motor de plantillas 
app.set("view engine", "ejs");
app.set("views", join(__dirname, "src/views")); 





//ESCUCHAR EL PUERTO
app.listen(PORT, () => {
    console.log(`Servidor corriendo desde el puerto ${PORT}`)
});