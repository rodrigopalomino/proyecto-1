import { Router } from "express";
import { principal } from "../controllers/indexFunc.js";
import { enviar } from "../controllers/indexFunc.js";
import { getEstados } from "../controllers/estado.controllers.js";
import { getFormulario, postFormulario } from "../controllers/kapu.controllers.js"

const router = Router();

router.get('/', principal);
router.post("/",enviar)


router.get('/estado', getEstados)

router.get('/kapu', getFormulario)
router.post('/kapu', postFormulario)


export default router
