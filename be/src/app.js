import express from 'express';
import expressGraphql from 'express-graphql';
import graphqlTools from 'graphql-tools';
import expressPlayground from 'graphql-playground-middleware-express'
import cors from 'cors';

import typeDefs from './schema.js';
import resolvers from './resolvers.js';

const { graphqlHTTP } = expressGraphql;
const { makeExecutableSchema } = graphqlTools;

const app = express();

app.use(cors({ origin: '*' }))

app.get('/', expressPlayground.default({ endpoint: '/' }))
app.use('/', graphqlHTTP({
  schema: makeExecutableSchema({ typeDefs, resolvers }),
  // graphiql: true,
}));

export default app;
