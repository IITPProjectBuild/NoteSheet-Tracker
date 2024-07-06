import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

// For Users
const indentorSchema = new Schema({
  indentorId: ObjectId, // UserId
  indentorName: String, //Username
  email: String,
  passwordHash: String,
  passwordSalt: String,
  role: String,
  twoFaEnabled: Boolean,
  createdAt: Date.now, // ISODate
  updatedAt: Date.now, // ISODate
})

// Updates updatedAt
indentorSchema.pre('save', function (next) {
  this.updatedAt = Date.now()
  next()
})

const indentor = mongoose.model('indentor', indentorSchema)

//For Clubs and Events  aka Organization
const orgSchema = new Schema({
  orgId: ObjectId,
  orgName: String,
  email: String, //Contact Email
  phone: String, // Contact Phone
  createdAt: Date.now, // ISODate
  updatedAt: Date.now, // ISODate
})

orgSchema.pre('save', function (next) {
  this.updatedAt = Date.now()
  next()
})

const org = mongoose.model('org', orgSchema)

//For Templates
const tempSchema = new Schema({
  tempId: ObjectId, // Addition by Arpit
  tempName: String,
  temContent: String,
  createdBy: Object, // ID of user who created  or we can rename it as just {userId}
  createdAt: Date.now, // ISODate
  updatedAt: Date.now, // ISODate
})

tempSchema.pre('save', function (next) {
  this.updatedAt = Date.now()
  next()
})

const temp = mongoose('temp', tempSchema)

// For Templates that will be saved
const tempSavedSchema = new Schema({
  tempId: ObjectId,
  indentorId: ObjectId,
  orgId: ObjectId,
  status: String, // e.g., 'Draft', 'Submitted', 'Approved', 'Rejected'
  createdAt: Date.now, //ISODate
  updatedAt: Date.now, //ISODate
  submittedAt: Date.now, //ISODate
  finalizedAt: Date.now, //ISODate
})
// Do we also have to include which level or by whom it is rejected by ?
// we can do it as
// approvedBy: mongoose.Types.Array  // Those who have approved it will be in this array

tempSavedSchema.pre('save', function (next) {
  this.updatedAt = Date.now()
  next()
})

const tempSaved = mongoose('tempSaved', tempSavedSchema)

//
const noteSheetSchema = new Schema({
  indentorId: ObjectId,
  noteSheetId: ObjectId,
  // user_id: ObjectId,  User id was two times in the framework why??
  action: String, // e.g., 'Submitted', 'Approved', 'Rejected'
  comment: String,
  timestamp: Date.now,
  digitalSignature: String,
})
// Will this not contain createdAt???
const noteSheet = mongoose('noteSheet', noteSheetSchema)

// I have no idea wtf it is no 1
const noteSheetApprovedSchema = new Schema({
  intendorId: ObjectId,
  noteSheetId: ObjectId,
  approverId: ObjectId,
  status: String, // e.g., 'Forwarded', 'Rejected'
  comment: String,
  timestamp: Date.now,
  digitalSignature: String,
})

const noteSheetApproved = mongoose('noteSheetApproved', noteSheetApprovedSchema)

//  Its to late i cant figure this out
const noteSheetStatusSchema = new Schema({
  intendorId: ObjectId,
  // user_id ObjectId, why are ther two ids here??
  noteSheetId: ObjectId,
  remainderDate: Date.now,
  status: String, // e.g., 'Pending'
})

// Have to make a funcion to change remainder date

const noteSheetStatus = mongoose('noteSheetStatus', noteSheetStatusSchema)

// Idk anything i need to sleep
const fundSchema = new Schema({
  intendorId: ObjectId,
  orgId: ObjectId,
  noteSheetId: ObjectId,
  AmountSpend: Number,
  date: Date.now,
  category: String,
})

const fund = mongoose('fund', fundSchema)
