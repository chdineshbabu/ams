const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
     name: { type: String, required: true },
  department: { type: String },
  subject: { type: Schema.Types.ObjectId, ref: 'Subject' },
  age: { type: Number },
  gender: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Teacher', teacherSchema);
