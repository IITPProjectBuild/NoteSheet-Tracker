import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import connectDB from './backend/database.js';
import dotenv from 'dotenv';
import { User } from './model/User.js';
import { NoteSheet } from './model/NoteSheet.js';

dotenv.config();

const app = express();
const port = 3000; // Using the port from the .env file

connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/', async (req, res) => {
  console.log(req.body);
  const { userId, purpose, mail } = req.body;
  console.log(userId);

  if (purpose === 'createNewUser') {
    const newUser = new User({
      userName: userId,
      email: mail,
    });
    console.log(newUser);
    await newUser.save();
    console.log('Saved user');
  } else if (purpose === 'fetchNoteSheets') {
    let notesheet = await NoteSheet.find({ userId: userId }); //can add filter here to make them group like pages
    console.log(notesheet);
  } else if (purpose === 'createNewNoteSheet') {
    const newNoteSheet = new NoteSheet({
      userId,
      content: 'testing 6',
      digitalSignatures: [],
    });
    await newNoteSheet.save();
    console.log('Saved');
  } else {
    console.log('error');
  }
});

app.listen(port, () => {
  console.log(`Example app is listening on port ${port}`);
});
