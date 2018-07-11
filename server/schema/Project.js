const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: String,
  updated: { type: Date, default: Date.now() },
  creator: String,
  description: String,
  users: [String]
});

const ProjectModel = mongoose.model('Project', ProjectSchema);

module.exports = { ProjectModel, ProjectSchema };
