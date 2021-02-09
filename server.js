
// Require express, mongoose, and logger.
// The express package is used to a create a node server to run the workout-tracker application on.
// It also listens for requests and manages the routes for the application. 
const express = require("express");

// The mongoose package is used to help Mongodb communicate with Node.js. 
// "Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, 
// provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB."
const mongoose = require("mongoose");

// Morgan is a middleware that logs the requests to the server to the console. 
const logger = require("morgan");

// Establish PORT via enviromental PORT (to use with Heroku) or for local PORT 3000.
const PORT = process.env.PORT || 3000;

// Add the express function to the app variable to use express throughout server.js. 
const app = express();

// Creates logger instance via morgan package above. 
app.use(logger("dev"));

// Middleware to interpet the data being passed to POST and PUT routes. 
// Parse request body as JSON.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

// Use mongoose to connect o Mongodb locally. Might have to change to work with Mongo Altas and Heroku.
// Set useNewUrlParser:true to use new URL parser; versus using the the default parser which is going to be deprecated soon.
// Set useFindAndModify:false to use findOneAndUpdate(), findOneAndReplace, and findOneAndDelete().
// Set useUnifiedTopology:true to use the new Server discover and monitoring engine, otherwise it will use default version which will be deprecated soon.

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// Require api and html routes.
app.use(require("./routes/html-routes.js"));
app.use(require("./routes/api-routes.js"));

// Listen for the routes being called on the PORT as defined above. 
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});