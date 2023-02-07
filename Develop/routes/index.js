const app = require("express").Router();

// Allow new constant to link to the notes router
const notesRouter = require("./apiroutes");

// Route notes using the const
app.use("/notes", notesRouter);

// Mapping the router export
module.exports = app;
