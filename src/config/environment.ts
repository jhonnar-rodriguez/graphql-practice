import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const setUpEnvironment = (): void => {
  const { NODE_ENV } = process.env;

  let envFile;

  switch (NODE_ENV) {
    case 'production':
      envFile = '.env.production';
      break;
    case 'test':
      envFile = '.env.test';
      break;
    default:
      envFile = '.env';
      break;
  }

  const envPath = `${path.join(__dirname, '..', '..', envFile)}`;

  dotenv.config({ path: envPath });
};

setUpEnvironment();
