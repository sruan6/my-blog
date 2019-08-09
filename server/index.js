const express = require('express');
// const bodyParser = require('body-parser');
// Passportjs Services
require('./db');
require('./services');

const app = express();

require('./routes/authRoute')(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✈️ Server ready at http://localhost:${PORT}/ ✈️`);
});
