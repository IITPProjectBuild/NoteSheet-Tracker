import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import connectDB from './backend/connectDB.js';
import dotenv from 'dotenv';
import { User, NoteSheet } from './backend/model/Schemas.js';
import { GiMailShirt } from 'react-icons/gi';

dotenv.config();
const Schema = mongoose.Schema;
// const ObjectId = Schema.Types.ObjectId;

const app = express();
const port = 3000;

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

app.get('/pendingheets', (req, res) => {
    res.send('Pending Sheets');
});

// For finding userId
app.post('/', async (req, res) => {
    const { token } = req.body;
    const user = await User.findOne({ email: token });
    const userId = user._id.toString();
    res.send(userId);
});

// For finding my notesheets
app.post('/notesheets', async (req, res) => {
    const { userId } = req.body;
    console.log(userId);
    const Id = mongoose.Types.ObjectId(userId);
    let notesheet = await NoteSheet.find({ userId: Id }); //can add filter here to make them group like pages
    console.log('notesheets sent');
    res.send(notesheet);
});

//For making new notesheets
app.post('/newnotesheet', async (req, res) => {
    const { title, userInfo, email, equips } = req.body;
    let user = await User.findOne({ email });

    const body = {
        equips,
        userInfo,
    };

    const newNoteSheet = new NoteSheet({
        title,
        userId: new mongoose.Types.ObjectId(user),
        content: body,
    });

    await newNoteSheet.save();
    console.log(body);
    console.log('Saved');
});

// For getting all pending sheets (only for vp or gensec)
let access = ['vp', 'gensec', 'arpitraj@gmail.com'];
app.post('/pendingsheets', async (req, res) => {
    let { email } = req.body;

    for (let index = 0; index < access.length; index++) {
        const element = access[index];
        if (email == element) {
            let arr = await NoteSheet.find({ status: 'Pending' });
            res.send(arr);
            return;
        }
    }

    let arr = await NoteSheet.find({ email: email, status: 'Pending' });
    res.send(arr);
});

app.listen(port, () => {
    console.log(`Example app is listening on port ${port}`);
});
