import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const UserSchema = new Schema({
    userName: String,
    email: String,
    password: String,
    role: String, // available roles: [ individual, organisation ] -> would be assigned based on emailId
    permissions: String, // [ requestOnly, approve ] -> `approve` would give the ability to both request and approve -> would be assigned based on email
    twoFaEnabled: Boolean,
    createdAt: { type: Date, default: Date.now },
    updatedAt: Date,
});

UserSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

export const User = mongoose.model('User', UserSchema);

const TemplateSchema = new Schema({
    templateName: String,
    templateContent: Object,
    createdBy: ObjectId, // ID of user who created  or we can rename it as just {userId}
    createdAt: { type: Date, default: Date.now }, // ISODate
    updatedAt: { type: Date, default: Date.now }, // ISODate
});

TemplateSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

export const Template = mongoose.model('Template', TemplateSchema);

const NoteSheetSchema = new Schema({
    title: { type: String, required: true },
    userId: { type: ObjectId, ref: 'User', required: true }, // id of the user who created the notesheet
    content: Object, // the content of the notesheet stored as JSON object with form-fieldnames as keys and user-input data as values
    templateId: { type: ObjectId, ref: 'Template' },
    comments: [String], // there may be multiple comments -> stored as an array of strings
    status: { type: String, default: 'Pending' }, // available states: ['pending', 'Rejected', 'approved']
    timestamp: { type: Date, default: Date.now }, // time of creation
    digitalSignatures: [String], // the notesheet will pass through multiple approvers and hence it is logical to store the signatures as an array of strings
});

export const NoteSheet = mongoose.model('NoteSheet', NoteSheetSchema);

const NoteSheetActionSchema = new Schema({
    userId: ObjectId, // id of the user who created the notesheet
    noteSheetId: ObjectId, // mongo _id of the original notesheet
    currentlyForwardedTo: ObjectId,
    action: String, // [approved & forwarded, rejected, approved, pending]
    approverIds: [ObjectId], // array of _ids of the users who approved
    timestamps: [Date], // array of timestamps when the notesheet was approved at each level
});

export const NoteSheetAction = mongoose.model('NoteSheetAction', NoteSheetActionSchema);

// For Fund Tracking
const FundSchema = new Schema({
    userId: ObjectId,
    amountSpend: Number,
    totalFunds: Number,
    noteSheetId: ObjectId, // approved through which notesheet
    date: { type: Date, default: Date.now },
    category: String,
});

export const Fund = mongoose.model('Fund', FundSchema);
