import express from 'express';
import expressGraphql from 'express-graphql';
import graphqlTools from 'graphql-tools';

import typeDefs from './schema.js';
import resolvers from './resolvers.js';
import expressPlayground from 'graphql-playground-middleware-express'

const { graphqlHTTP } = expressGraphql;
const { makeExecutableSchema } = graphqlTools;

const app = express();

app.get('/graphql', expressPlayground.default({ endpoint: '/' }))
app.use('/', graphqlHTTP({
  schema: makeExecutableSchema({ typeDefs, resolvers }),
  // graphiql: true,
}));

export default app;
