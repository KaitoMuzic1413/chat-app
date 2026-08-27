import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const { MONGO_URL } = process.env;
        if (!MONGO_URL) throw new Error("MONGO_URL is not set");
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongodb connected")
    } catch (error) {
        console.log("error connect monngodb: ",error)
        process.exit(1);
    }
}