const db = require("../models");

// Project controller methods
module.exports = {
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