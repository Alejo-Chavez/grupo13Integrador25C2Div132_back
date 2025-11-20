import dotenv from "dotenv";

dotenv.config(); // Cargamos las variables de entorno desde el archivo.env

// Vamos a exportar esta informacion del .env
export default {
    PORT: process.env.PORT || 3500,
    database: {
        host: process.env.DB_HOST,
        name: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    }
}