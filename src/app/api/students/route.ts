import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/app/lib/mongoose';
import Student from '@/app/models/Student';

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const body = await request.json();
    const newStudent = new Student(body);
    const savedStudent = await newStudent.save();
    return NextResponse.json({ success: true, data: savedStudent }, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const students = await Student.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: students }, { status: 200 });
  } catch (error) {
    console.error('Error fetching Students:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
