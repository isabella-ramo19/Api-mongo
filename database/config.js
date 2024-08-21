import { connect } from 'mongoose';

const dbConnection = async () => {
    try {
        await connect(process.env.MONGO_CNN);
        console.log('Connected to mongo DB');
    } catch (error) {
        console.error('Error connecting to mongo DB:', error);
        throw new Error('Database connection failed');
    }
};

export default dbConnection;