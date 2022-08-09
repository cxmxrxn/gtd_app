const mongoose = require('mongoose')

const NextActionSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter a Next Action.'],
            minlength: [3, 'Next Actions must be at least 3 characters.']
        },
        context: {
            type: String,
        },
        project: {
            type: String,
        },
        dueDate: {
            type: Date,
        }
    },
    {
        timestamps: true,
    }
);

const NextAction = mongoose.model('next action', NextActionSchema)

module.exports = NextAction