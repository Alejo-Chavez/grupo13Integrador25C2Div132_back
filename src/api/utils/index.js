//Acá va la logica para trabajar con archivos y rutas de nuestro proyecto

//importar modulos para trabajar con las RUTAS

import {fileURLToPath} from "url"; // -> esto convierte una ruta archivo tipo: file:// -> a una ruta de sitema de archivos
import {dirname, join} from "path"; // ->dirname devuelve el DIRECTORIO de una ruta y join unifica rutas

//Para obtener el nombre del archivo actual
const __filename = fileURLToPath(import.meta.url); //'import.meta.url' da la URL absoluta del modulo actual
//Obtener el nombre del directorio actual
const __dirname = join(dirname(__filename), "../../../")
//console.log("__filename ", __filename )
//console.log("dirname importado",dirname(__filename))
//console.log("__dirname con join",__dirname)

export{
    __dirname, join
}

