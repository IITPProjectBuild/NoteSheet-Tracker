import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI).then((e) => {
            console.log('MongoDB connected successfully');
        });
    } catch {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;
