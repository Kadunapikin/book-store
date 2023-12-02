import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mangoose from 'mongoose';
import { Book } from './models/bookModel.js';

const app = express();

app.post('/book', (req, res) => {
    try {
        if(!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({ message: 'Send all required field: title, author and publishYear'});
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

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

