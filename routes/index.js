const path = require("path");
const Router = require("express").Router;
const APIRoutes = require("./api");

const router = Router();

router.use("/api", APIRoutes);
router.use((req, res) => res.sendFile(path.join(__dirname, "../client/build/index.html")));

module.exports = router;