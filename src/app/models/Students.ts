import mongoose, { Schema, model, models } from 'mongoose';

const StudensSchema = new Schema({

  fristname: {
    type: String,
    required: [false, 'Fristname is required'], // ชื่อเป็นข้อมูลที่จำเป็น
  },
  lastname: {
    type: String,
    required: [false, 'Lastname is required'], // ตำแหน่งเป็นข้อมูลที่จำเป็น
  },
  grade: {
    type: String,
    required: [false, 'Grade is required'], // ตำแหน่งเป็นข้อมูลที่จำเป็น
  },
  age: {
    type: String,
    required: [false, 'Age is required'], // ตำแหน่งเป็นข้อมูลที่จำเป็น
  },
  role: {
    type: String,
    enum: ['director', 'teacher', 'staff'], // จำกัดค่า role เฉพาะ 3 ค่า
    required: [false, 'Role is required'], // role เป็นข้อมูลที่จำเป็น
  },
}, { timestamps: true });

const Studens = models.Studens || model('Studens', StudensSchema);
export default Studens;
