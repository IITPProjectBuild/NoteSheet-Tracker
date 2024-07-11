import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import connectDB from './backend/database.js';
import dotenv from 'dotenv';
import { User } from './model/User.js';
import { NoteSheet } from './model/NoteSheet.js';

dotenv.config();
const Schema = mongoose.Schema;
// const ObjectId = Schema.Types.ObjectId;

const app = express();
const port = 3000; // Using the port from the .env file

connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/notesheets', (req, res) => {
    res.send('Your notesheets');
});
app.get('/newnotesheet', (req, res) => {
    res.send('New notesheet');
});

app.post('/', async (req, res) => {
    const { token } = req.body;
    const user = await User.findOne({ email: token });
    const userId = user._id.toString();
    res.send(userId);
});

app.post('/notesheets', async (req, res) => {
    const { userId } = req.body;
    console.log(userId);
    const Id = mongoose.Types.ObjectId(userId);
    let notesheet = await NoteSheet.find({ userId: Id }); //can add filter here to make them group like pages
    console.log('notesheets sent');
    res.send(notesheet);
});

app.post('/newnotesheet', async (req, res) => {
    const { userId } = req.body;

    const newNoteSheet = new NoteSheet({
        userId: new mongoose.Types.ObjectId(userId),
        content: 'testing 6',
        digitalSignatures: [],
    });
    await newNoteSheet.save();
    console.log('Saved');
});

app.listen(port, () => {
    console.log(`Example app is listening on port ${port}`);
});
