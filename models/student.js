const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: { type: String, required: true },
  grade: { type: String, required: true },
  age: { type: Number },
  gender: { type: String },
  subjects: [{ type: Schema.Types.ObjectId, ref: 'Subject' }],
  attendance: [{
    subject: { type: Schema.Types.ObjectId, ref: 'Subject' },
    totalClasses: { type: Number, default: 0 },
    attended: { type: Number, default: 0 },
  }]
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
