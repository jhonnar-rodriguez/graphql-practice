import express from 'express';
import setUpApolloServer from './apollo-server';
import routes from '../routes';
import databaseConnect from '../config/typeorm';

const { APP_PORT, APP_GRAPHQL_PATH = 'api' } = process.env;

const startServer = async () => {
  const app = express();

  app.use(routes);

  setUpApolloServer(app, APP_GRAPHQL_PATH);

  app.listen(APP_PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${APP_PORT}`);
    console.log(`🚀 GraphQL ready at http://localhost:${APP_PORT}${APP_GRAPHQL_PATH}`);
  });
};

databaseConnect();
startServer();

export default startServer;
