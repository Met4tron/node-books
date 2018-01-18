require('dotenv').config();
import mongoose from 'mongoose';

exports.connect = (callback) => {
  const url = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
  mongoose.connect(url, { 
    useMongoClient: true
  });

  mongoose.Promise = global.Promise;

  mongoose.connection.on('error', (err) => { console.log(err) });
  mongoose.connection.on('disconnect', () => { console.log() });

  if (callback) {
    callback();
  }
}