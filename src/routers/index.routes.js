import { Router } from "express";
import { principal } from "../controllers/indexFunc.js";

const router = Router();

router.get('/', principal);

export default router;
