import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI || 'mongodb+srv://db-graphql:chung1234@cluster0.kaay616.mongodb.net/graphqlDB';

export const connectDb = async () => {
    await mongoose.connect(uri).then(() => {
        console.log('Connect database successfully!');
    });
}
