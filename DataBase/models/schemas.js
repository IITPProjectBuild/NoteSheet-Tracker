const mongoose = require("mongoose"); // we should stick to commonJS modules for now

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

// For Users
const IndentorSchema = new Schema({
  indentorId: ObjectId, // UserId
  indentorName: String, //Username
  email: String,
  passwordHash: String,
  passwordSalt: String,
  role: String,
  twoFaEnabled: Boolean,
  createdAt: { type: Date, default: Date.now }, // ISODate // Swagatam: I don't think we need a default date anywhere ??
  updatedAt: { type: Date, default: Date.now }, // ISODate 
});

// Updates updatedAt
IndentorSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const Indentor = mongoose.model('Indentor', IndentorSchema);

//For Clubs and Events  aka Organization
const OrgSchema = new Schema({
  orgId: ObjectId,
  orgName: String,
  email: String, //Contact Email
  phone: String, // Contact Phone
  createdAt: { type: Date, default: Date.now }, // ISODate
  updatedAt: { type: Date, default: Date.now }, // ISODate
});

OrgSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const Org = mongoose.model('Org', OrgSchema);

//For Templates
const TempSchema = new Schema({
  tempId: ObjectId, // Addition by Arpit
  tempName: String,
  temContent: String,
  createdBy: Object, // ID of user who created  or we can rename it as just {userId}
  createdAt: { type: Date, default: Date.now }, // ISODate
  updatedAt: { type: Date, default: Date.now }, // ISODate
});

TempSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const Temp = mongoose.model('Temp', TempSchema);

// For Templates that will be saved
const TempSavedSchema = new Schema({
  tempId: ObjectId,
  indentorId: ObjectId,
  orgId: ObjectId,
  status: String, // e.g., 'Draft', 'Submitted', 'Approved', 'Rejected'
  createdAt: { type: Date, default: Date.now }, //ISODate
  updatedAt: { type: Date, default: Date.now }, //ISODate
  submittedAt: { type: Date, default: Date.now }, //ISODate
  finalizedAt: { type: Date, default: Date.now }, //ISODate
});
// Do we also have to include which level or by whom it is rejected by ? // Swagatam: We should do this ig
// we can do it as
// approvedBy: mongoose.Types.Array  // Those who have approved it will be in this array

TempSavedSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const TempSaved = mongoose.model('TempSaved', TempSavedSchema);

//
const NoteSheetSchema = new Schema({
  indentorId: ObjectId,
  noteSheetId: ObjectId,
  // user_id: ObjectId,  User id was two times in the framework why??
  action: String, // e.g., 'Submitted', 'Approved', 'Rejected'
  comment: String,
  timestamp: { type: Date, default: Date.now },
  digitalSignature: String,
});
// Will this not contain createdAt???
const NoteSheet = mongoose.model('NoteSheet', NoteSheetSchema);

// I have no idea wtf it is no 1
const NoteSheetApprovedSchema = new Schema({
  intendorId: ObjectId,
  noteSheetId: ObjectId,
  approverId: ObjectId,
  status: String, // e.g., 'Forwarded', 'Rejected'
  comment: String,
  timestamp: { type: Date, default: Date.now },
  digitalSignature: String,
});

const NoteSheetApproved = mongoose.model('NoteSheetApproved', NoteSheetApprovedSchema);

//  Its to late i cant figure this out
const NoteSheetStatusSchema = new Schema({
  intendorId: ObjectId,
  // user_id ObjectId, why are ther two ids here??
  noteSheetId: ObjectId,
  remainderDate: { type: Date, default: Date.now }, // Swagatam: What's the purpose of remainderDate here ??
  status: String, // e.g., 'Pending'
});

// Have to make a funcion to change remainder date

const NoteSheetStatus = mongoose.model('NoteSheetStatus', NoteSheetStatusSchema);

// Idk anything i need to sleep
const FundSchema = new Schema({
  intendorId: ObjectId,
  orgId: ObjectId,
  noteSheetId: ObjectId,
  AmountSpend: Number,
  date: { type: Date, default: Date.now },
  category: String,
});

const Fund = mongoose.model('Fund', FundSchema);
