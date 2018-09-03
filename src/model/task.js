const mongoose = require('../database');
const { Schema } = mongoose;

const task_schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true }
});

module.exports = mongoose.model( 'Task', task_schema );
