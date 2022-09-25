import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './router.js';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static('client'));
app.use(cors());
app.use('/api', router);

const startApp = async () => {
  try {
    await mongoose.connect(process.env, { useUnifiedTopology: true, useNewUrlParser: true });
    app.use(express.static(path.join(__dirname, '/client')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '/client', 'index.html'));
    });
    app.listen(process.env.PORT || 5000, () => console.log('SERVER STARTED ON PORT ' + PORT));
  } catch (e) {
    console.log(e);
  }
};
startApp();
