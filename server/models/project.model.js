const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'A project name is required.'],
            minlength: [7, 'A project name must be at least 7 characters long.']
        },
        notes: {
            type: String,
        },
        dueDate: {
            type: Date,
        },
        nextActions: {
            type: [ String ],
            required: [true, 'A next action is required to create a project.']
        }
    },
    {
        timestamps: true,
    }
);

const Project = mongoose.model('project', ProjectSchema);

module.exports = Project;