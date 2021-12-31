import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import { Application } from 'express';
import { buildSchema } from 'type-graphql';

import PingResolver from '../resolvers/Ping';
import ProductResolver from '../resolvers/products/ProductResolver';

const setUpApolloServer = async (app: Application, path: string): Promise<void> => {
  const schema = await buildSchema({
    resolvers: [PingResolver, ProductResolver],
  });

  const server = new ApolloServer({
    schema,
    context: (({ req, res }) => ({ req, res })),
  });

  await server.start();

  server.applyMiddleware({ app, path });
};

export default setUpApolloServer;
