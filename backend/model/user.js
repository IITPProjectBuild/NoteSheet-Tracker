import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';
import { createTokenForUser } from '../services/authentication.js';

const ObjectId = Schema.Types.ObjectId;

//Timezones has to be fixed

const userSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        profileImageURL: {
            type: String,
            default: '/images/default.png',
        },
        role: {
            type: String,
            enum: ['USER', 'ADMIN'],
            default: 'USER',
        },
    },
    {
        timestamps: true,
        // createAt: new Date.now().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        // updatedAt: new Date.now().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        twoFaEnabled: {
            type: Boolean,
            dafault: false,
        },
    }
);

userSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

userSchema.static('GenerateToken', async function (userInfo) {
    const token = createTokenForUser(userInfo);
    return token;
});

export const User = model('User', userSchema);
