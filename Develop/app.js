const express = require('express');
const fs = require('fs');

let app = express();
let PORT = process.env.Port || 3001

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static(__dirname + "/public"));

require("./routes/html-routes")(app);

app.listen(PORT, () => {
    console.log('App listening on PORT:' + PORT);
});