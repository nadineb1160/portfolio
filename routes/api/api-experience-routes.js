const experienceController = require("../../controllers/experienceController");
const router = require("express").Router();


router.route("/")
    .get(experienceController.getAll)
    .post(experienceController.create);

router.route("/:id")
    .get(experienceController.getOne)
    .put(experienceController.update)
    .delete(experienceController.delete);


module.exports = router;

