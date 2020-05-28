// Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");

// Requiring our Models for Syncing
const db = require("./models");

// Set up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

app.use(logger("dev"));

// Static Directory
app.use(express.static("public"));


// Parse Request Body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/portfoliodb", { useNewUrlParser: true });

app.listen(PORT, function () {
    console.log(`Server listening at localhost: ${PORT}`);
});

