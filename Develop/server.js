const express = require("express");

const api = require("./routes/index");
const html = require("./routes/homeRoutes");

// Process environment port, this makes the existing port variable to 3001
// Use this when deploying to heroku
const PORT = process.env.port || 3001;

// Create Express instance
const app = express();

// Use Middlewear to parse JSON and URL requests
// functions that happen between front end and backend before they talk to eachother
// converts the body of the request object to json
app.use(express.json());

// url encoded: its a type of format on our urls, where we use percentage signs of spaces
// this formats our url when it comes into the server, the percentage signs used as spaces it will get rid of them
app.use(express.urlencoded({ extended: true }));
// // This lets whatever argument we put into static it will let the whole application have access to the static folder
app.use(express.static("public"));

// API Routes which you can explore in Insomnia
app.use("/api", api);
app.use("/", html);

// This allows us to turn our server on
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
