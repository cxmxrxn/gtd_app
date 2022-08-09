const ActionController = require ("../controllers/action.controllers");

module.exports = (app) => {
    app.get('/api/action', ActionController.getAllActions);
    app.post('/api/action', ActionController.createAction);
    app.put('/api/action/:id', ActionController.updateAction);
    app.delete('/api/action/:id', ActionController.deleteAction);
    app.get('/api/action/:id', ActionController.getOneAction);
};