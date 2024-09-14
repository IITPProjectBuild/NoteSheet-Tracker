import { Schema, model } from 'mongoose';

const ObjectId = Schema.Types.ObjectId;

const NoteSheetActionSchema = new Schema({
    userId: ObjectId, // id of the user who created the notesheet
    noteSheetId: ObjectId, // mongo _id of the original notesheet
    currentlyForwardedTo: ObjectId,
    action: String, // [approved & forwarded, rejected, approved, pending]
    approverIds: [ObjectId], // array of _ids of the users who approved
    timestamps: [Date], // array of timestamps when the notesheet was approved at each level
});

export const NoteSheetAction = model('NoteSheetAction', NoteSheetActionSchema);
