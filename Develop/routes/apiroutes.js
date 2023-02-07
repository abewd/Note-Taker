const notes = require("express").Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require("../helpers/fsUtil");

// Route to handle GET request to retrieve all notes
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

  // Destructure the incoming request body
  const { title, text } = req.body;

  // Check if  t he request body is present
  if (req.body) {
    // Create a new note obj
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };

    // Append the new note to the file
    readAndAppend(newNote, "db/db.json");
    // Return a success message
    res.json(`Note added successfully 🚀`);
  } else {
    // Return an error message if the request is not present
    res.error("Error in adding note");
  }
});

// Function to delete sleceted notes
notes.delete("/:id", (req, res) => {
  // Read data from file
  readFromFile("db/db.json").then((data) => {
    // Parse data
    let parsedData = JSON.parse(data);
    // Filter the notes to exclude the one with the unique ID
    let newData = parsedData.filter((note) => note.id != req.params.id);
    // Write the updated data to the new file
    writeToFile("db/db.json", newData);
    // Return an empty JSON obj as the response
    res.json({});
  });
});

module.exports = notes;
