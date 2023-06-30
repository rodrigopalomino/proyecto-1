import { Router } from "express";
import { principal } from "../controllers/indexFunc.js";
import { enviar } from "../controllers/indexFunc.js";

const router = Router();

router.get('/', principal);
router.post("/",enviar)


router.get('/estado', getEstados)
// router.get('/estado', (req,res) => res.render('estado'))
// router.get('/estado', (req,res) => res.send("dsa"))


export default router
