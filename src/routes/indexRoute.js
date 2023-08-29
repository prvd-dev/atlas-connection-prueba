const { Router } = require("express");
const router = Router();

const { renderIndex } = require("../controllers/indexController.js");

router.get("/index", renderIndex);

module.exports = router;
