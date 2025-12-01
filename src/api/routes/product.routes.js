import { Router } from "express";
import { validateId } from "../middlewares/middlewares.js";
import {getAllProducts, getProductsById, postProduct, modifyProduct, deleteProduct} from  "../controllers/product.controllers.js";
const router =  Router();

router.get('/', getAllProducts);
router.get('/:id',validateId, getProductsById);
router.post('/', postProduct)
router.put('/', modifyProduct)
router.put("/:id", validateId, deleteProduct); //no hacemos delete, solo baja logica

export default router;