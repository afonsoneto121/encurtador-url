import express from 'express';
import * as cors from 'cors';
import loader from 'morgan';
import {errorHanddlerMiddleware} from './middlewares/error-handdles.middleware';
import * as constants from './common/constants';
import {urlRouter} from './router/url.router';
import {statusRouter} from './router/status.router';
const app = express();

app.use(loader('dev'));
app.use(cors.default());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(urlRouter);
app.use(statusRouter);

app.use(errorHanddlerMiddleware);

app.listen(constants.PORT, constants.HOST, () => {
  console.log(`API running at ${constants.API_URL}`);
});
