const app = require("express").Router();
const util = require("util");
const fs = require("fs");
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

var myNoteData;

// GET and read data from db.json file
app.get("/notes", (req, res) => {
    readFile("db/db.json", "utf8").then(function(data) {
        myNoteData = JSON.parse(data);
        res.json(myNoteData);
    });
});


// POST request to post information and get id for each note
app.post("/notes", (req,res) => {
    readFile("db/db.json", "utf8").then(function(data) {
        myNoteData = JSON.parse(data);
        
        let note = req.body;
        let currentID = myNoteData.length

        note.id = currentID + 1;
        myNoteData.push(note);
        myNoteData = JSON.stringify(myNoteData);

        writeFile("db/db.json", myNoteData).then(function(data) {
            console.log("New note added!")
            res.json(myNoteData);
        });
        
    });
});

app.delete("/notes/:id", (req, res) => {
    let thisID = parseInt(req.params.id);

    for(let i=0; i < myNoteData.length; i++) {
        if(thisID === myNoteData[i].id) {
            myNoteData.splice(i, 1);
            
            let newNote = JSON.stringify(myNoteData, null, 2);

            writeFile("db/db.json", newNote).then((data) => {
                console.log("Note is deleted");
            });
        }
    }
    res.json(myNoteData);
});

module.exports = app;