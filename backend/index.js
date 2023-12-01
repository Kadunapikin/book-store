import express from 'express';
import { PORT } from './config.js';

const app = express();

app.get('/', (req, res) => {
    console.log(`welcome to MERN-STACK tutorial`);
    return res.status(234).send('Welcome to MERN STACK tutorial')
});

app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
})