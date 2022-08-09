const ProjectController = require ("../controllers/project.controllers");

module.exports = (app) => {
    app.get('/api/project', ProjectController.getAllProjects);
    app.post('/api/project', ProjectController.createProject);
    app.put('/api/project/:id', ProjectController.updateProject);
    app.delete('/api/project/:id', ProjectController.deleteProject);
    app.get('/api/project/:id', ProjectController.getOneProject);
};