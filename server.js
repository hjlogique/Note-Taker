
// ======= Note-Taker ========
// == By Henry Jean Logique ==
// ===========================

// Dependencies 
var express = require("express");
var fs = require("fs");
var path = require("path");

// Set up the Express App
var app = express(); // Express server
var PORT = 3000; // PORT 

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true })); // Middleware
app.use(express.json());
app.use(express.static("public")); // Import webiste's style

// ========= API Route =========

const database = path.resolve(__dirname, "db"); // Pathway to db directory
let idNum = 1; // id for each note

// API GET reads the `db.json` file and return all saved notes as JSON
app.get("/api/notes", function (req, res) {
    fs.readFile(path.resolve(database, "db.json"), "utf8", function (err, data) {
        res.json(JSON.parse(data));
    });
});

// API POST receives a new note, add it to the `db.json` file, 
// and then return it to the client

app.post("/api/notes", function (req, res) {

    let notesList = []; // List of Note objects

    // Current list of notes
    let data = fs.readFileSync(path.resolve(database, "db.json"), "utf8");
    notesList = JSON.parse(data);

    // Create a new note object from the POST received data
    let newNoteObj = {
        id: idNum,
        title: req.body.title,
        text: req.body.text,
    };

    // Add the new note to the list
    notesList.push(newNoteObj);

    // Update the db JSON file with the new note
    fs.writeFileSync(
        path.resolve(database, "db.json"),
        JSON.stringify(notesList),
        function (err) {
            if (err) {
                return console.log(err);
            }
        }
    );

    // Return the new note with a new ID
    res.json(newNoteObj);
    idNum += 1;
});


// API DELETE receives a query parameter containing the id of a note to delete. 
// It reads all notes from the `db.json` file, removes the note with the given 
// `id` property, and rewrites the notes to the `db.json` file.

app.delete("/api/notes/:id", function (req, res) {

    // Current list of notes
    let notesList = [];
    let noteIndex = 0;
    let data = fs.readFileSync(path.resolve(database, "db.json"), "utf8");
    notesList = JSON.parse(data);

    // Find the note which should be deleted based on it's id
    for (var i = 0; i < notesList.length; i++) {
        if (notesList[i].id === parseInt(req.params.id)) {
            noteIndex = i;
            break;
        }
    }

    // Remove the note from the note list
    notesList.splice(noteIndex, 1);

    // Rewrite the notes to the `db.json` file 
    fs.writeFileSync(
        path.resolve(database, "db.json"),
        JSON.stringify(notesList),
        function (err) {
            if (err) {
                return console.log(err);
            }
        }
    );
    res.json(true);
});

// ======= HTML Route ========

// HTML GET displays the `index.html` file
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

// HTML GET displays the `notes.html` file
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});


// Start the server to begin listening
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});