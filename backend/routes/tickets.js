const express = require('express');
const router = express.Router();
const configuration = require("../config.json")

/* Faced issues related to authentication with axios npm. so switching to zendesk node API*/
const Zendesk = require('zendesk-node-api');

const zendesk = new Zendesk({
    url: configuration.url,
    email: configuration.email,
    token: configuration.token
});

router.get('/', async function(req, res) {
    zendesk.tickets.list().then(function(response) {
        console.log(response)
        console.log(`Received a total of ${response?.length} tickets` )
        res.send(response)
    }).catch(function(error) {
            console.log('Error',error)
            res.send(JSON.stringify(error?.response?.status))
        })
})

module.exports = router;