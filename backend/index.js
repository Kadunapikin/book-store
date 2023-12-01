import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mangoose from 'mongoose';

const app = express();

app.get('/', (req, res) => {
    console.log(`welcome to MERN-STACK tutorial`);
    return res.status(234).send('Welcome to MERN STACK tutorial')
});

mangoose.connect(mongoDBURL)
.then(() => {
    console.log('Connected to Database successfully');
    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`);
    })
})
.catch((error) => {
    console.log(error);
})

