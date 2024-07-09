import mongoose from 'mongoose';
import express from 'express';

const dbUrl = 'mongodb://127.0.0.1:27017/noteSheetTracker';
mongoose.connect(dbUrl)
  .then(() => {
    console.log('Mongo connected successfully!');
  })
  .catch(error => {
    console.log('Error: Couldn\'t connect to mongo!');
    console.log(error);
  });

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
