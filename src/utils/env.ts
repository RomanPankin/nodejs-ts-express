import path from 'path';
import fs from 'fs';

import * as dotenv from 'dotenv';

// environment variables
const envFile = path.join(__dirname, '..', '..', '.env');
if (!fs.existsSync(envFile)) {
  throw new Error('Please define .env file');
}

dotenv.config({ path: envFile });
