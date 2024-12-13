import mongoose, { Schema, model, models, Document } from 'mongoose';

interface IDrawResults extends Document {
  drawDate: Date;
  typeDigit: string;
  threeDigitOn: string;
  twoDigitOn: string;
  twoDigitLow: string;
  createdAt: Date;
}

const DrawResultsSchema = new Schema<IDrawResults>({
  drawDate: { type: Date },
  typeDigit: { type: String, required: true },
  threeDigitOn: { type: String, required: true },
  twoDigitOn: { type: String, required: true },
  twoDigitLow: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const DrawResults = models.DrawResults || model<IDrawResults>('DrawResults', DrawResultsSchema);

export default DrawResults;

