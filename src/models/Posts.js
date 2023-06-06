import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    created_at: {type: Date, default: Date.now()},
    updated_at: {type: Date, default: Date.now()}
})

export default mongoose.model('Post', postSchema);
