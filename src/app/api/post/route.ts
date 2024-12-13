import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/app/lib/mongoose';
import Post from '@/app/models/Post';

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const body = await request.json();
    const newNew = new Post(body);
    const savedNew = await newNew.save();
    return NextResponse.json({ success: true, data: savedNew }, { status: 201 });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const news = await Post.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: news }, { status: 200 });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}

