const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const feeds = require('./routes/feeds');

const app = express();
app.use((req, res, next) => {
  //Setting necessary headers to response data
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => res.send('Api works!'))

app.use('/api/feeds', feeds);

module.exports = app;
