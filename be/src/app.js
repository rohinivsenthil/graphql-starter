const express = require('express');
const expressGraphql = require('express-graphql');
const graphqlTools = require('graphql-tools');
const expressPlayground = require('graphql-playground-middleware-express');
const cors = require('cors');

const typeDefs = require('./schema.js');
const resolvers = require('./resolvers.js');

const { graphqlHTTP } = expressGraphql;
const { makeExecutableSchema } = graphqlTools;

const app = express();

app.use(cors({ origin: '*' }));

app.use('/graphql', graphqlHTTP({
  schema: makeExecutableSchema({ typeDefs, resolvers }),
  // graphiql: true,
}));
app.get('/', expressPlayground.default({ endpoint: '/graphql' }));

module.exports = app;
