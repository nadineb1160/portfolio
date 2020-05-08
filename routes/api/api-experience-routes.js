const db = require("../../models");
const Router = require("express").Router;

const experience = {
    getAll: (req, res) => {
        db.Experiences.find({}).then(dbRes => {res.status(200).json(dbRes)}).catch(err => res.status(400).json(err));
    },
    getOne: (req, res) => {
        db.Experiences.findById(req.params.id).then(dbRes => {res.status(200).json(dbRes)}).catch(err => res.status(400).json(err));
    },
    create: (req, res) => {
        db.Experiences.create(req.body).then(dbRes => {res.status(200).json(dbRes)}).catch(err => res.status(400).json(err));
    },
    update: (req, res) => {
        db.Experiences.findByIdAndUpdate(req.params.id, req.body).then(dbRes => {res.status(200).json(dbRes)}).catch(err => res.status(400).json(err));
    },
    delete: (req, res) => {
        db.Experiences.findByIdAndDelete(req.params.id).then(dbRes => {res.status(200).json(dbRes)}).catch(err => res.status(400).json(err));
    }
}

const router = Router();

router.route("/").get(experience.getAll).post(experience.create);
router.route("/:id").get(experience.getOne).put(experience.update).delete(experience.delete);


module.exports = router;

