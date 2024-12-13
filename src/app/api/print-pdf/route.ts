import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/app/lib/mongoose'
import { PDFDocument } from 'pdf-lib'; // or use jsPDF if preferred

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Connect to MongoDB
    const client = await connectToDatabase;
    const db = client.db("addsaraban"); // Replace with your database name
    const collection = db.collection("booksetbids"); // Replace with your collection name

    // Fetch data
    const data = await collection.find({}).toArray();

    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 800]);
    const { width, height } = page.getSize();

    // Add content to the PDF
    let y = height - 50; // Start from the top
    page.drawText("Database Data:", { x: 50, y, size: 20, color: rgb(0, 0, 0) });
    y -= 30;

    data.forEach((item, index) => {
      const text = `${index + 1}. ${JSON.stringify(item)}`;
      page.drawText(text, { x: 50, y, size: 12 });
      y -= 20;
    });

    // Convert the PDF to bytes
    const pdfBytes = await pdfDoc.save();

    // Send PDF as a response
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=database.pdf");
    res.send(Buffer.from(pdfBytes));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}