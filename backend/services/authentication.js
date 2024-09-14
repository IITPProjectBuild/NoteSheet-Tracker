import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.JWT_SECRET;

function createTokenForUser(user) {
    const payload = {
        _id: user._id,
        email: user.email,
        role: user.role,
    };
    const token = JWT.sign(payload, secret);
    return token;
}

function validateToken(token) {
    if (!token) {
        throw new Error('Token is missing');
    }
    const payload = JWT.verify(token, secret);
    return payload;
}

export { createTokenForUser, validateToken };
