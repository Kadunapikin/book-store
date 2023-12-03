import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mangoose from 'mongoose';
import { Book } from './models/bookModel.js';
import bookRoute from './routes/bookRoute.js'

const app = express();
//Middleware for parsing request body
app.use(express.json());
app.use('/books', bookRoute);

// app.get('/', (req, res) => {
//     console.log(`welcome to MERN-STACK tutorial`);
//     return res.status(234).send('Welcome to MERN STACK tutorial')
// });

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

