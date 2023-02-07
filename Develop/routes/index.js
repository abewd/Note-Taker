const app = require("express").Router();

// Allow new constant to link to the notes router
const notesRouter = require("./notes");

// Route notes using the const
app.use("/notes", notesRouter);

// Mapping the router export
module.exports = app;
