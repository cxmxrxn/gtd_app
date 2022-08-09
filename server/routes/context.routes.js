const ContextController = require ("../controllers/context.controllers");

module.exports = (app) => {
    app.get('/api/context', ContextController.getAllContexts);
    app.post('/api/context', ContextController.createContext);
    app.put('/api/context/:id', ContextController.updateContext);
    app.delete('/api/context/:id', ContextController.deleteContext);
    app.get('/api/context/:id', ContextController.getOneContext);
};