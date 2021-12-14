import express from 'express';
import * as cors from 'cors';
import loader from 'morgan';
const app = express();

app.use(loader('dev'));
app.use(cors.default());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const port = (process.env.PORT || 3333) as number;
const hostname = process.env.HOST || '0.0.0.0';

app.listen(port, hostname, () => {
  console.log(`API running in port ${port}`);
});
