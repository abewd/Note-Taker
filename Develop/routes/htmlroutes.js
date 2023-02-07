// setup our routes to render our html page

// setup our router variable
// this will let us write routes

const router = require("express").Router();
const path = require("path");

// creating routes

router.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/notes.html"))
);

module.exports = router;
