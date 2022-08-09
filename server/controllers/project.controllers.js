const Project = require('../models/project.models.js');

module.exports = {
    getAllProjects: (req, res) => {
        Project.find({})
            .then((allProjects) => res.join(allProjects))
            .catch((err) => console.log(err));
    },

    getOneProject: (req, res) => {
        Project.findById(req.params.id)
            .then((oneProject) => res.json(oneProject))
            .catch((err) => console.log(err));
    },

    createProject: (req, res) => {
        Project.create(req.body)
            .then((newProject) => res.json(newProject))
            .catch((err) => console.log(err));
    },

    updateProject: (req, res) => {
        Project.findByIdAndUpdate({_id: req.params.id}, req.body, {
            new: true,
            runValidation: true,
        })
            .then((updatedProject) => res.json(updatedProject))
            .catch((err) => console.log(err));
    },

    deleteProject: (req, res) => {
        Project.findByIdAndRemove({_id: req.params.id})
            .then((removedProject) => res.json(removedProject))
            .catch((err) => console.log(err));
    }
};
