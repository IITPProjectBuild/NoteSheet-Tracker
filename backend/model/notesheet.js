import { Schema, model } from 'mongoose';

const ObjectId = Schema.Types.ObjectId;

const NoteSheetSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    userId: {
        type: ObjectId,
        ref: 'User',
        required: true,
    }, // id of the user who created the notesheet
    content: Object, // the content of the notesheet stored as JSON object with form-fieldnames as keys and user-input data as values
    templateId: {
        type: ObjectId,
        ref: 'Template',
    },
    comments: [String], // there may be multiple comments -> stored as an array of strings
    status: {
        type: String,
        default: 'Pending',
    }, // available states: ['pending', 'Rejected', 'approved']
    timestamp: {
        type: Date,
        default: Date.now,
    }, // time of creation
    digitalSignatures: [String], // the notesheet will pass through multiple approvers and hence it is logical to store the signatures as an array of strings
});

export const NoteSheet = model('NoteSheet', NoteSheetSchema);
