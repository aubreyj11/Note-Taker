const htmlRoute = require("./routes/html-routes");
const apiRoute = require("./routes/apiRoutes");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// app.use("/public", express.static(__dirname + "/public"));
app.use(express.static('public'));
app.use("/api", apiRoute);
app.use("/", htmlRoute);


app.listen(PORT, () => {
    console.log('App listening on PORT:' + PORT);
});

module.exports = app;