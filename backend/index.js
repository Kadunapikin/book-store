import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mangoose from 'mongoose';
import { Book } from './models/bookModel.js';

const app = express();
//Middleware for parsing request body
app.use(express.json());

//Route to create new book
app.post('/books', async (req, res) => {
    try {
        if(!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({ message: 'Send all required field: title, author and publishYear'});
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        };

        const book = await Book.create(newBook);
        return res.status(201).send(book);
                
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

app.get('/', (req, res) => {
    console.log(`welcome to MERN-STACK tutorial`);
    return res.status(234).send('Welcome to MERN STACK tutorial')
});

app.get('/books', async (req, res) => {
    try {
        const books = await Book.find({})
        res.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
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

