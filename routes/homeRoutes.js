// Create path
const path = require("path");
// Create a new router object, this will handle requests
const router = require("express").Router();

// Link to notes.html in the front-end
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// Link to index.html in the front-end
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Mapping the router export
module.exports = router;
