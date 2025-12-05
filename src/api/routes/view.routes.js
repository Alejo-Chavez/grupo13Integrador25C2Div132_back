import { Router } from "express";
import { productsView, productById, createProduct, modifyProduct, deleteProduct } from "../controllers/view.controllers.js"; 


const router = Router();

router.get("/", productsView);
router.get("/consultar", productById);
router.get("/crear", createProduct);
router.get("/modificar", modifyProduct);
router.get("/eliminar", deleteProduct);

export default router;