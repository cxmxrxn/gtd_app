const Context = require('../models/context.models.js');

module.exports = {
    getAllContexts: (req, res) => {
        Context.find({})
            .then((allContexts) => res.join(allContexts))
            .catch((err) => console.log(err));
    },

    getOneContext: (req, res) => {
        Context.findById(req.params.id)
            .then((oneContext) => res.json(oneContext))
            .catch((err) => console.log(err));
    },

    createContext: (req, res) => {
        Context.create(req.body)
            .then((newContext) => res.json(newContext))
            .catch((err) => console.log(err));
    },

    updateContext: (req, res) => {
        Context.findByIdAndUpdate({_id: req.params.id}, req.body, {
            new: true,
            runValidation: true,
        })
            .then((updatedContext) => res.json(updatedContext))
            .catch((err) => console.log(err));
    },

    deleteContext: (req, res) => {
        Context.findByIdAndRemove({_id: req.params.id})
            .then((removedContext) => res.json(removedContext))
            .catch((err) => console.log(err));
    }
};
