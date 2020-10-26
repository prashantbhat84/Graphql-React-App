import mongoose, { mongo } from 'mongoose';


const connectdb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_url, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        });
        console.log("Mongo DB connection established")
    } catch (error) {
        throw new Error(error.message);
    }
};
export default connectdb;