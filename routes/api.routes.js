import { Router } from "express";
import { getHelloWorld, postHelloWorld, getHolaMundo } from "./../controllers/apis-ecar.controllers";

const router = Router();

router.get("/", getHelloWorld);
router.post("/", postHelloWorld);
router.get("/hola-mundo", getHolaMundo);

export default router;