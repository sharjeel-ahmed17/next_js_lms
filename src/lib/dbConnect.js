import mongoose from "mongoose";

export async function connectDb() {
    try {
        let connection ;
        console.log('connection?.connection',connection?.connection);
        if (connection?.connection.readyState != 1) {
            console.log('connecting to database...');
            connection = await mongoose.connect(process.env.MONGO_URI);
            console.log('Connected to database');
        }
        
    } catch (error) {
        console.log('>>>error',error);
        
        
    }
    
}