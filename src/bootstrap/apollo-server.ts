import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import { Application } from 'express';
import { buildSchema } from 'type-graphql';

import PingResolver from '../resolvers/Ping';

const setUpApolloServer = async (app: Application, path: string): Promise<void> => {
  const schema = await buildSchema({
    resolvers: [PingResolver],
  });

  const server = new ApolloServer({
    schema,
    context: (({ req, res }) => ({ req, res })),
  });

  await server.start();

  server.applyMiddleware({ app, path });
};

export default setUpApolloServer;
