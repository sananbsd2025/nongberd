import { NextResponse } from "next/server";
import { PDFDocument, rgb } from "pdf-lib";
import { connectToDatabase } from "@/app/lib/mongodb";
import RecordModel from "@/app/models/Record";

// Handle GET request
export async function GET() {
  try {
    // Connect to MongoDB
    await connectToDatabase();

    // Fetch records from the database
    const records = await RecordModel.find();

    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 800]);
    const { width, height } = page.getSize();

    // Add title
    let y = height - 50; // Start from the top
    page.drawText("ข้อมูลจากระบบ:", { x: 50, y, size: 20, color: rgb(0, 0, 0) });
    y -= 30;

    // Add records to the PDF
    records.forEach((record, index) => {
      const text = `
        ${index + 1}.
        วันที่: ${record.drawDate}
        ประเภท: ${record.typeDigit}
        3 หลักบน: ${record.threeDigitOn}
        2 หลักบน: ${record.twoDigitOn}
        2 หลักล่าง: ${record.twoDigitLow}
      `;
      page.drawText(text, { x: 50, y, size: 10 });
      y -= 80; // Space between entries
    });

    // Convert the PDF to bytes
    const pdfBytes = await pdfDoc.save();

    // Send the PDF as a response
    return new NextResponse(Buffer.from(pdfBytes), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=data.pdf",
      },
    });
  } catch (error) {
    console.error(error);
    return new NextResponse("ไม่สามารถสร้าง PDF ได้", { status: 500 });
  }
}
