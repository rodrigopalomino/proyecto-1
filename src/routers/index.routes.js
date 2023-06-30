import { Router } from "express";
import { getEstados } from "../controllers/estado.controllers.js";

const router = Router()


router.get('/estado', getEstados)
// router.get('/estado', (req,res) => res.render('estado'))
// router.get('/estado', (req,res) => res.send("dsa"))


export default router