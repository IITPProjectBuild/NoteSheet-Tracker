import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import cors from 'cors';
import connectDB from './backend/connectDB.js';
import dotenv from 'dotenv';
import createPdf from './serverUtils/createPdf.js';
import { User, NoteSheet } from './backend/model/Schemas.js';
import { GiMailShirt } from 'react-icons/gi';
import { title } from 'process';
import { time } from 'console';

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

app.get('/verifyuser', (req, res) => {
    res.send('Verifying users');
});

// For finding userId
app.post('/', async (req, res) => {
    const { token } = req.body;
    const user = await User.findOne({ email: token });
    const userId = user._id.toString();
    res.send(userId);
});

//For verifying user
//Adding token JWT
app.post('/verifyuser', async (req, res) => {
    const { email, pass } = req.body;
    try {
        let userinfo = await User.findOne({ email: email });

        if (userinfo.length == 0) {
            return res.status(404).send('Wrong User or Password');
        }

        let userpassword = userinfo.password;
        if (userpassword !== pass)
            if (await bcrypt.compare(pass, userpassword)) {
                res.send(userpassword);
            } else {
                res.status(401).send('Wrong User or Password');
            }
        else {
            res.send(userpassword);
        }
    } catch (err) {
        console.error('Error', err);
        res.status(500).send('Internal server error');
    }
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
    await createPdf({ ...body, title }, './public/pdfLogo.png', `./temporaryPdfStorage/output-${Date.now()}.pdf`);
    console.log(body);
    console.log('Saved');
});

// For getting all pending sheets (only for vp or gensec)
let access = ['vp', 'gensec', 'arpitraj@gmail.com'];
app.post('/pendingsheets', async (req, res) => {
    let { email } = req.body;
    console.log(email);

    for (let index = 0; index < access.length; index++) {
        const element = access[index];
        if (email == element) {
            let arr = await NoteSheet.find(
                { status: 'Pending' },
                '_id title userId timestamp' // Projection
            );
            res.send(arr);
            return;
        }
    }

    let arr = await NoteSheet.find({ status: 'Pending', email: email }, '_id title userId timestamp');
    res.send(arr);
});

app.listen(port, () => {
    console.log(`Example app is listening on port ${port}`);
});
