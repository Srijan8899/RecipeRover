import mongoose from "mongoose";


const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGO_URI}/${process.env.MONGO_DB}`)

        console.log(`MongoDB Connected: ${conn.connection.host}`)

    } catch (error) {
        console.log("Connection error", error)
        process.exit(1)
    }
}

export default dbConnect;
