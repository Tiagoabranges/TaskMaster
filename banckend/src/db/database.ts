import mongoose from 'mongoose';
import 'dotenv/config';

const MONGO_DB_URL = process.env.MONGO_URI || 'mongodb://localhost:27017/SeuBancoDeDados';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGO_DB_URL);
    console.log('Connected to the MongoDB database.');
  } catch (error) {
    console.error('Error connecting to the MongoDB database:', error);
  }
};

export default connectToDatabase;
