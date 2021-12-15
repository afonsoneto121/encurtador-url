
export const PORT = (process.env.PORT || 3333) as number;
export const HOST = process.env.HOST || '0.0.0.0';
export const API_URL = process.env.API_URL || `http://${HOST}:${PORT}`;
export const MONGO_URL = process.env.MONGO_URL || `mongodb://root:root@localhost:27017/short?authSource=admin`;


