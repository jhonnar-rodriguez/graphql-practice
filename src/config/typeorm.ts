import { createConnection } from 'typeorm';
import path from 'path';

const databaseConnect = async (): Promise<void> => {
  const {
    DATABASE_NAME: database,
    DATABASE_HOST: host,
    DATABASE_USERNAME: username,
    DATABASE_PASSWORD: password,
    DATABASE_PORT,
  } = process.env;

  const entities = path.join(__dirname, '..', 'entities', '**', '**.ts');

  await createConnection({
    type: 'mysql',
    host,
    port: Number(DATABASE_PORT),
    username,
    password,
    database,
    entities: [entities],
    synchronize: true,
  });

  console.log('🚀 Application is now connected to the database!!');
};

export default databaseConnect;
