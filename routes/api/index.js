const Router = require("express").Router;
const experienceRoutes = require("./api-experience-routes");
const projectRoutes = require("./api-project-routes");

const router = Router();

router.use("/experience", experienceRoutes);
router.use("/project", projectRoutes);

module.exports = router;
