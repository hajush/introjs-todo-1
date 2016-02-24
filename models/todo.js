var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
  name: String,
  dueDate: String,
  description: String
});

module.exports = mongoose.model('Todo', TodoSchema);