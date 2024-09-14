import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import cors from 'cors';
import connectDB from './backend/services/connectDB.js';
import dotenv from 'dotenv';
import createPdf from './serverUtils/createPdf.js';
// import { User, NoteSheet, NoteSheetAction, Fund, Template } from './backend/model/Schemas.js';

import { User } from './backend/model/user.js';
import { NoteSheet } from './backend/model/notesheet.js';
import { Template } from './backend/model/template.js';
import { NoteSheetAction } from './backend/model/notesheetAction.js';
import { Fund } from './backend/model/fund.js';

import { checkForAuthenticationCookie } from './middlewares/authentication.js';

dotenv.config();
const Schema = mongoose.Schema;
// const ObjectId = Schema.Types.ObjectId;

const app = express();
const port = process.env.PORT || 3000;

app.use(
    cors({
        origin: 'http://localhost:3001', // Replace with your frontend URL
        methods: ['GET', 'POST', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
        credentials: true, // If you need to send cookies
        allowedHeaders: ['Content-Type', 'Authorization'],
    })
);
app.options('*', cors());

app.use(express.json());

connectDB();

app.use(checkForAuthenticationCookie('token'));

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/newUser', (req, res) => {
    res.send('New User');
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

//For finding user
app.post('/', async (res, req) => {
    const { token } = req.body;
    const user = await User.findOne({ email: token });
    const userId = user._id.toString();
    res.send(userId);
});

// For creating new user
app.post('/newUser', async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const acc = new User({
        fullName: req.body.userName,
        email: req.body.email,
        password: hashedPassword,
        role: 'ADMIN',
    });

    await acc.save();
    return;
});

//For verifying user
app.post('/verifyuser', async (req, res) => {
    const { email, pass } = req.body;
    try {
        const userinfo = await User.findOne({ email });
        if (!userinfo) throw new Error('Wrong User or Password');

        let userpassword = userinfo.password;
        if (await bcrypt.compare(pass, userpassword)) {
            User.GenerateToken(userinfo);
            res.send('User Verified');
        } else {
            res.status(401).send('Wrong User or Password');
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
