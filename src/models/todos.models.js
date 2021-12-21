const { Schema, model } = require('mongoose');

const todoSchema = new Schema(
    {
        content: { type: String, required: true},
				status: {type: Boolean, required: true},
        author: {type: String, required: true},
        date: Date
    }, {
        timestamps: true
    });

module.exports = model('Todo',todoSchema);

