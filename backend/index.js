/*
index file to run backend
 */
const express = require('express');
const cors = require('cors');
const app = express();

const tickets = require('./routes/tickets')
const configuration = require("./config.json")
app.use(cors())

app.use('/tickets', tickets);

/* Error handling with express */
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send("Oops! Something seems wrong. Don't worry we'll handle it soon")
})

/* Starting the server */
app.listen(configuration.port, () => {
  console.log(`Backend server started listening on port ${configuration.port}`);
});

/* Catching unhandled exception */
process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION IN THE PROCESS:');
  console.error(err.stack);
});

module.exports = app;