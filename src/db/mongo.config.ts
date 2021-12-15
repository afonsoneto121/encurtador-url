import {connect, connection, ConnectOptions} from 'mongoose';
import * as constants from '../common/constants';

const options = {
  autoCreate: true,
  autoIndex: false,
} as ConnectOptions;

connection.on('open', () => {
  console.log('Successfully connected to database MongoDB');
});
connection.on('error', () => {
  throw new Error('Error connecting to database');
});

export const run = async (): Promise<void> => {
  await connect(constants.MONGO_URL, options);
};

