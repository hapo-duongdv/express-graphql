import mongoose from 'mongoose';

const uri = 'mongodb+srv://qquannguyentrong123:Quan20112002@@cluster0.mpnbdbe.mongodb.net/?retryWrites=true&w=majority';

export const connectDb = async () => {
    await mongoose.connect(uri).then(() => {
        console.log('Connect database successfully!');
    });
}