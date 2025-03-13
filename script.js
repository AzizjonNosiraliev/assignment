// get the data from the array of objects:
const animals = require("./data");

// init express function module and save it as an express var:
const express = require("express");
// init the express module and save it to app var:
const app = express();
// init the PORT"
const PORT = 3008;

// home route:
app.get("/", (req, res) => {
    res.send('<h1> Welcome to my Assignment page</h1>');
});

// animals route:
app.get("/animals", (req, res) => {
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    res.send(randomAnimal);
});

// This listen runs the PORT and starts the server:
app.listen(PORT, () => {
    console.log(`Server running at localhost:${PORT}`);
});