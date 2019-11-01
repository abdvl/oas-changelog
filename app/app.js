require("express-async-errors");

const express = require("express");
const router = require("./router");

const app = express();

/**
 * For parsing application/json
 */
app.use(express.json());

/**
 * Routers
 */
app.use("/", router);

/**
 * Error Handling
 */
app.use(function(err, req, res, next) {
    console.error(err);
    res.status(500).send(err);
});

module.exports = app;
