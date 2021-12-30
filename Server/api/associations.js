const router = require('express').Router();
const axios = require('axios')
const secretAPIkey = require('../../secrets')

router.get('/:subject', async function (req, res, next) {
    try {
    const APIkey = secretAPIkey
    const host = 'https://api.wordassociations.net'
    const associations = await axios
    .get(`${host}/associations/v1.0/json/search?apikey=${APIkey}&text=${req.params.subject}&lang=en&limit=20`)
    res.json(associations.data)
    } catch (err) {
        next (err)
    }
});

module.exports = router;
