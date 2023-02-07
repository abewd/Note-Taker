// Initialise the essentials
const express = require("express");
const path = require("path");
const apiroutes = require("./routes/apiroutes.js");

// Initiate const app
const app = express();
// linking the new file we made
const htmlroutes = require("./routes/htmlroutes.js");

// Gateway
// hardcoding only port 3001
// const PORT = 3001;
// or
// process environment port, this makes the existing port variable to 3001
// use this when deploying to heroku
const PORT = process.env.port || 3001;

// API routes
// const api = require("./routes/index");

// Use Middlewear to parse JSON and URL requests
// functions that happen between front end and backend before they talk to eachother

// app.get for example...
// converts the body of the request object to json
app.use(express.json());
// url encoded: its a type of format on our urls, where we use percentage signs of spaces
// this formats our url when it comes into the server, the percentage signs used as spaces it will get rid of them
app.use(express.urlencoded({ extended: true }));

// This lets whatever argument we put into static it will let the whole application have access to the static folder
app.use(express.static("public"));
app.use("/api", apiroutes);
app.use("/", htmlroutes);
// app.use("*/", everything);

// this allows us to turn our server on
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
