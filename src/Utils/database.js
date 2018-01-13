require('dotenv').config();
import mongoose from 'mongoose';

exports.connect = () => {
  const url = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
  mongoose.connect(url, { 
    useMongoClient: true
  });
  
  mongoose.connection.on('error', (err) => { console.log(err) });
  mongoose.connection.on('disconnect', () => { console.log() });
}