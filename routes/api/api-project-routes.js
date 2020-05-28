const projectController = require("../../controllers/projectController");
const router = require("express").Router();

console.log("project")


router.route("/")
    .get(projectController.getAll)
    .post(projectController.create);

router.route("/:id")
    .get(projectController.getOne)
    .put(projectController.update)
    .delete(projectController.delete);


module.exports = router;