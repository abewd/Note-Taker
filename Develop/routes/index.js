const app = require("express").Router();

// Import the notes router
const notesRouter = require("./notes");

// Mount the notes router at the /notes endpoint
app.use("/notes", notesRouter);

//export the Express app instance
module.exports = app;
