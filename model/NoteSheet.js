import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const NoteSheetSchema = new Schema({
    userId: ObjectId, // id of the user who created the notesheet
    content: { type: String, default: '' }, // the content of the notesheet stored as JSON object with form-fieldnames as keys and user-input data as values
    status: { type: String, default: 'pending' }, // available states: ['pending', 'Rejected', 'approved']
    timestamp: { type: Date, default: Date.now }, // time of creation
    digitalSignatures: [String], // the notesheet will pass through multiple approvers and hence it is logical to store the signatures as an array of strings
});

export const NoteSheet = mongoose.model('NoteSheet', NoteSheetSchema, 'notesheets');
