const express = require('express')
  , router = express.Router();

router.use('/api/user', require('./user'));
router.use('/api/trip', require('./trip'));
router.use('/api/catch', require('./catch'));

router.get('/', function(req, res) {
  res.send('Hello World!');
})

router.get('/about', function(req, res) {
  res.send('Fishing Diary server.');
})

module.exports = router;