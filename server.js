// Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");

// Requiring our Models for Syncing
const db = require("./models");

// Set up the Express App
const app = express();
var PORT = process.env.PORT || 3001;

app.use(logger("dev"));

// Static Directory
app.use(express.static("public"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Parse Request Body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/portfoliodb", { useNewUrlParser: true, useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

app.listen(PORT, function () {
    console.log(`Server listening at localhost: ${PORT}`);
});

