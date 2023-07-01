import { Router } from "express";
import { principal, enviar } from "../controllers/indexFunc.js";
import { getEstados, getConsultas } from "../controllers/estado.controllers.js";
import { getFormulario, postFormulario } from "../controllers/kapu.controllers.js"

const router = Router();

router.get('/', principal);
router.post("/",enviar)


router.get('/estado', getEstados)

router.get('/kapu', getFormulario)
router.post('/kapu', postFormulario)

router.get('/consultas', getConsultas)


export default router
