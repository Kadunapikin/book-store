import Mongoose  from "mongoose";

const bookSchema = Mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        publishYear: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Book = Mongoose.model('cat', bookSchema)