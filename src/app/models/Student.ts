import mongoose, { Schema, model, models } from 'mongoose';

const StudentSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  age: { type: Number, required: true },
  glevel: { type: String, required: true },
  grade: { type: String, required: true },
}, { timestamps: true });

const Student = models.Student || model('Student', StudentSchema);

export default Student;
