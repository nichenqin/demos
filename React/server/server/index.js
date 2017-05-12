const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const router = require('./router');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:auth/auth');

app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));

router(app);

const port = process.env.port || 3090;

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
