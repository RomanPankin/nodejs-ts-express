import express from 'express';
import path from 'path';
import * as dotenv from 'dotenv';

// read environment variables
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const app = express();
const port = process.env.SERVER_PORT;

app.get('/', (req, res) => {
  res.json({ data: 'Hello world!' });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server started at http://localhost:${port}`);
});
