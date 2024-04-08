
// import mongoose from 'mongoose';
// import { DB_NAME } from '../constants.js';

// export const connectDB = async () => {
//     try {
//         const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log(`\n mongodb connected || Db host: ${connectionInstance.connection.host}`);
//     } catch (error) {
//         console.log("MONGODB connection error", error);
//         process.exit(1);
//     }
// };




import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

export const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017';
        const connectionInstance = await mongoose.connect(`${mongoURI}/${DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB connected || DB host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MONGODB connection error", error);
        process.exit(1);
    }
};





