const mongoose = require('mongoose')

const ContextSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'A name for your context is required.'],
            minlength: [4, 'Context name must be at least 4 characters.'],
            maxlength: [20, 'Context name must be less than 20 characters.']
        }
    },
    {
        timestamps: true,
    }
);

const Context = mongoose.model('context', ContextSchema);

module.exports = Context;