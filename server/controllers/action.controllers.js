const Action = require('../models/action.models.js');

module.exports = {
    getAllActions: (req, res) => {
        Action.find({})
            .then((allActions) => res.join(allActions))
            .catch((err) => console.log(err));
    },

    getOneAction: (req, res) => {
        Action.findById(req.params.id)
            .then((oneAction) => res.json(oneAction))
            .catch((err) => console.log(err));
    },

    createAction: (req, res) => {
        Action.create(req.body)
            .then((newAction) => res.json(newAction))
            .catch((err) => console.log(err));
    },

    updateAction: (req, res) => {
        Action.findByIdAndUpdate({_id: req.params.id}, req.body, {
            new: true,
            runValidation: true,
        })
            .then((updatedAction) => res.json(updatedAction))
            .catch((err) => console.log(err));
    },

    deleteAction: (req, res) => {
        Action.findByIdAndRemove({_id: req.params.id})
            .then((removedAction) => res.json(removedAction))
            .catch((err) => console.log(err));
    }
};
