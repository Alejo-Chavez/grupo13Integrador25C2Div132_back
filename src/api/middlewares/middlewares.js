//Middleware de aplicacion
export const loggerURL = (req, res, next)=>{
    console.log(`[${new Date().toDateString()}] ${req.method} ${req.url}`);
    next();
}

//Middleware de ruta
export const validateId = (req, res, next)=>{
    const {id} = req.params;

    if(!id || isNaN(Number(id))){
        return res.status(400).json({
            message: "El id del producto debe ser un numero valido"
        })
    };
    req.id = parseInt(id, 10);
    console.log("Id validada: ", req.id);
    next(); 
}