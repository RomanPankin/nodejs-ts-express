import express from 'express';
import path from 'path';
import fs from 'fs';
import bodyParser from 'body-parser';
import expressWinston from 'express-winston';

import * as dotenv from 'dotenv';
import { logger } from './utils';
import { configureRoutes } from './routes';

// environment variables
const envFile = path.join(__dirname, '..', '.env');
if (!fs.existsSync(envFile)) {
  throw new Error('Please define .env file');
}

dotenv.config({ path: envFile });

// express configuration
const app = express();
const port = process.env.SERVER_PORT;

// middlewares and routes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressWinston.logger(logger));

configureRoutes(app);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server started at http://localhost:${port}`);
});
