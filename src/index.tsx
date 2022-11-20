import './utils/env';
import express from 'express';
import bodyParser from 'body-parser';
import expressWinston from 'express-winston';

import { logger } from './utils';
import { errorHandler, page404Handler } from './middlewares';
import { routes } from './controllers';

// express configuration
const app = express();
const port = process.env.SERVER_PORT || 3000;

// middlewares and routes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressWinston.logger(logger));
app.use(express.json());
app.use('/', routes.export());
app.use(errorHandler);
app.use(page404Handler);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server started at http://localhost:${port}`);
});
