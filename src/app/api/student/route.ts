import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/app/lib/mongoose';
import Student from '@/app/models/Student';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  if (req.method === 'POST') {
    try {
      const { firstname, lastname, age, glevel, grade } = req.body;

      // Validate required fields
      if (!firstname || !lastname || !age || !glevel || !grade) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
      }

      // Save to MongoDB
      const student = new Student({ firstname, lastname, age, glevel, grade });
      await student.save();

      res.status(201).json({ success: true, message: 'Student added successfully!', student });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Internal server error', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ success: false, message: `Method ${req.method} Not Allowed` });
  }
}

