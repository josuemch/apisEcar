const express = require("express");
const router = express.Router();
const {
    getHelloWorld,
    postHelloWorld,
    getHolaMundo,
} = require("./../controllers/apis-ecar.controllers");

router.get("/", getHelloWorld);
router.post("/", postHelloWorld);
router.get("/hola-mundo", getHolaMundo);

module.exports = router;