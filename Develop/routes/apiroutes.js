const notes = require("express").Router();
const fs = require("fs");
// Remember to run npm i uuid for this, npm i didnt work
const { v4: uuidv4 } = require("uuid");
const { readFromFile, readAndAppend, writeToFile } = require("../db/fsUtil");

// Retrieve both index.html and notes.html
notes.get("/", (req, res) => {
  // Read the data from the file
  readFromFile("db/db.json").then((data) => {
    // Parse the data and send it as the response
    res.json(JSON.parse(data));
  });
});

// Route to handle POST request to add new note
notes.post("/", (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;

  // Check if request is present
  if (req.body) {
    const note = {
      title,
      text,
      id: uuidv4(),
    };

    // Append note
    readAndAppend(note, "db/db.json");
    // Return a success message
    res.json(`Note added successfully 🚀`);
  } else {
    // Return an error message error present in request
    res.error("Error in adding note");
  }
});

// Function to delete selected notes
notes.delete("/:id", (req, res) => {
  readFromFile("db/db.json").then((data) => {
    let parsedData = JSON.parse(data);

    // Exclude exclusive ID
    let newData = parsedData.filter((note) => note.id != req.params.id);
    // Write new data
    writeToFile("db/db.json", newData);
    // Return an empty file
    res.json({});
  });
});

module.exports = notes;
