const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
require("dotenv").config();
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add routes, both API and view
app.use(routes);

if (process.env.NODE_ENV === "production") {
     app.use(express.static("client/build"));
     // app.use(express.static(path.join(__dirname, "./client/build")));
}

// Connect to the Mongo DB
mongoose.connect(
     process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
);

// mongoose.connect(
//      process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
//      {
//           useNewUrlParser: true,
//           useUnifiedTopology: true,
//           useCreateIndex: true,
//           useFindAndModify: false,
//      }
// );

// Start the API server
app.listen(PORT, function () {
     console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
