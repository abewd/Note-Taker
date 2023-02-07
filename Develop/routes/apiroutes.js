// setup our routes to render our html page

// setup our router variable
// this will let us write routes

const router = require("express").Router();
const path = require("path");
var db = require("../db/db.json");

// creating routes

router.get("/notes", (req, res) => {
  console.log(db);
  return res.json(db);
});

module.exports = router;
