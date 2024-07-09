import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const UserSchema = new Schema({
  userName: String,
  email: String,
  createdAt: { type: Date, default: Date.now },
});

export const User = mongoose.model('User', UserSchema, 'users');
