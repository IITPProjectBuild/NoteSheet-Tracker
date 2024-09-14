import mongoose from 'mongoose';
import { Schema, model } from 'mongoose';

const ObjectId = Schema.Types.ObjectId;

const FundSchema = new Schema({
    userId: ObjectId,
    amountSpend: Number,
    totalFunds: Number,
    noteSheetId: ObjectId, // approved through which notesheet
    date: { type: Date, default: Date.now },
    category: String,
});

export const Fund = model('Fund', FundSchema);
