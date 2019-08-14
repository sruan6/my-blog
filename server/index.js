const { ApolloServer } = require('apollo-server-express');
const { existsSync, mkdirSync } = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const schema = require('./db/gql/schema');
require('./db');
require('./services');

// eslint-disable-next-line no-unused-expressions
existsSync(path.join(__dirname, './client/public/images')) ||
  mkdirSync(path.join(__dirname, './client/public/images'));

const server = new ApolloServer({ schema });
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
require('./routes/authRoute')(app);

app.use(
  '/images',
  express.static(path.join(__dirname, './client/public/images'))
);
server.applyMiddleware({ app });

app.listen(4000, () => {
  console.log(`🚀  Server ready at http://localhost:4000/`);
});
