import { Router } from "express";
import { principal } from "../controllers/indexFunc.js";
import { enviar } from "../controllers/indexFunc.js";

const router = Router();

router.get('/', principal);
router.post("/",enviar)


export default router;
