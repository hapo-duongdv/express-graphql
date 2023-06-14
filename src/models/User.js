import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    sex: {
        type: Boolean,
        default: true
    },
    created_at: {type: Date, default: Date.now()},
    updated_at: {type: Date, default: Date.now()}
})

export default mongoose.model('User', userSchema);