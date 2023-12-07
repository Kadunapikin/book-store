import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PORT } from './config.js';
import bookRoute from './routes/bookRoute.js';

// Load environment variables
dotenv.config();

const app = express();
//Middleware for handling cors policy
//Option 1 to allow all origins with default of cors (*)
app.use(cors());
// app.use(cors({
//     origin: 'http://localhost:5173' // Allow only your React app domain
//   }));

//second option 
// app.use(
//     cors({
//         origin: 'http://localhost:5173/',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type']
//     })
// )

//Middleware for parsing request body
app.use(express.json());
app.use('/books', bookRoute);


// app.get('/', (req, res) => {
//     console.log(`welcome to MERN-STACK tutorial`);
//     return res.status(234).send('Welcome to MERN STACK tutorial')
// });

// MongoDB connection setup
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Connected to Database successfully');
    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`);
    });
})
.catch(err => console.error('MongoDB connection error:', err));


// mangoose.connect(mongoDBURL)
// .then(() => {
//     console.log('Connected to Database successfully');
//     app.listen(PORT, () => {
//         console.log(`App is listening to port: ${PORT}`);
//     })
// })
// .catch((error) => {
//     console.log(error);
// })

