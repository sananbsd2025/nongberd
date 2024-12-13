import mongoose, { Schema, model, models } from "mongoose";

interface Record {
  drawDate: string;
  typeDigit: string;
  threeDigitOn: string;
  twoDigitOn: string;
  twoDigitLow: string;
}

const RecordSchema = new Schema<Record>({
  drawDate: { type: String, required: true },
  typeDigit: { type: String, required: true },
  threeDigitOn: { type: String, required: true },
  twoDigitOn: { type: String, required: true },
  twoDigitLow: { type: String, required: true },
});

const RecordModel = models.Record || model<Record>("Record", RecordSchema);

export default RecordModel;
