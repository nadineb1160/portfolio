const db = require("../../models");
const Router = require("express").Router;

const projects = {
    getAll: (req, res) => {
        db.Projects.find({}).then(dbRes => {res.status(200).json(dbRes)}).catch(err => res.status(400).json(err));
    },
    getOne: (req, res) => {
        db.Projects.findById(req.params.id).then(dbRes => {res.status(200).json(dbRes)}).catch(err => res.status(400).json(err));
    },
    create: (req, res) => {
        db.Projects.create(req.body).then(dbRes => {res.status(200).json(dbRes)}).catch(err => res.status(400).json(err));
    },
    update: (req, res) => {
        db.Projects.findByIdAndUpdate(req.params.id, req.body).then(dbRes => {res.status(200).json(dbRes)}).catch(err => res.status(400).json(err));
    },
    delete: (req, res) => {
        db.Projects.findByIdAndDelete(req.params.id).then(dbRes => {res.status(200).json(dbRes)}).catch(err => res.status(400).json(err));
    }
}

const router = Router();

router.route("/").get(projects.getAll).post(projects.create);
router.route("/:id").get(projects.getOne).put(projects.update).delete(projects.delete);


module.exports = router;