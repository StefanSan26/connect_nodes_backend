const { Schema, model } = require('mongoose');

const todoSchema = new Schema(
    {
        title: String,
        content: { type: String, required: true},
        author: { type: String },
        date: Date
    }, {
        timestamps: true
    });

module.exports = model('Todo',todoSchema);

