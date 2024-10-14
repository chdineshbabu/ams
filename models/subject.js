const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
  teacher: { type: Schema.Types.ObjectId, ref: 'Teacher' },
  totalClasses: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Subject', subjectSchema);
