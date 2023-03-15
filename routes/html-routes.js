const router = require("express").Router();
const path = require("path");



// GET request to route to notes page
router.get("/notes", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// GET request to route home
router.get("/", (req, res)=> {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});


// export router
module.exports = router;
