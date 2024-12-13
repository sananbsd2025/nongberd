import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/app/lib/mongoose';
import Student from '@/app/models/Student';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  await connectToDatabase();

  if (req.method === 'PUT') {
    const { fristname, lastname, g_level, grade } = req.body;

    try {
      const updatedStudent = await Student.findByIdAndUpdate(
        id,
        { fristname, lastname, g_level, grade },
        { new: true }
      );

      if (!updatedStudent) {
        return res.status(404).json({ message: 'Student not found' });
      }

      res.status(200).json(updatedStudent);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
