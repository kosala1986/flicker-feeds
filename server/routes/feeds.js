const express = require('express');
const router = express.Router();
const flickerParser = require('../flickerParser');

/* GET users listing. */
router.get('/', function (req, res, next) {
  searchString = (req.query && req.query.searchString) ? req.query.searchString : '';
  flickerParser.getFlickerFeeds(searchString, (data) => {
    res.json(data);
  });
});

/* GET users listing. */
router.post('/', function (req, res, next) {
  searchString = (req.body && req.body.searchString) ? req.body.searchString : '';
  flickerParser.getFlickerFeeds(searchString, (data) => {
    res.json(data);
  });
});

module.exports = router;
