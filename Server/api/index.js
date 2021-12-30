const router = require('express').Router();

router.use('/associations', require('./associations')); // matches all requests to /api/users/



module.exports = router;