const { ApolloServer } = require('apollo-server-express');
const { existsSync, mkdirSync } = require('fs');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
const path = require('path');
const express = require('express');
const { cookieKey } = require('./config/keys');
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
app.use(
  cookieSession({
    maxAge: 7 * 24 * 60 * 60 * 1000,
    keys: [cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());
require('./routes/authRoute')(app);

app.use(
  '/images',
  express.static(path.join(__dirname, './client/public/images'))
);
server.applyMiddleware({ app });

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(4000, () => {
  console.log(`🚀  Server ready at http://localhost:4000/`);
});
