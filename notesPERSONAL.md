1. Inside your routes folder should be two files. One named apiRoutes.js and htmlRoutes.js
2. The apiRoutes.js file will contain a get route that responds with all notes from the database a post route that adds a note to the database and a delete route that well deletes notes from the database.
3. The htmlRoutes.js file is where you will serve the html that you were inquiring about. It will contain two get routes, one will respond with the notes.html file and the other will respond with the index.html file.
4. Don't forget to module.exports = router on each file as well! :slightly_smiling_face:
5. Then in your server,js file is where you are going to require these files and serve them when the correct routes are hit. ('/' and '/api')
   That should get you started back on the right track!
