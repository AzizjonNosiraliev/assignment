// get the data from the array of objects:
const animals = require("./data");
// init express function module and save it as an express var 
// and body-parser for parsing JSON data in POST requests.:
const express = require("express");
const bodyParser = require('body-parser');
// init the express module and save it to app var:
const app = express();
// init the PORT"
const PORT = 3008;

//use body-parser middleware to parse JSON data in POST requests:
app.use(bodyParser.json());
// POST route to add a new animal to the data file:
app.post("/animals", (req, res) => {
    const newAnimal = req.body;
    animals.push(newAnimal);
    res.json({"New animal added": newAnimal});
});

// home route:
app.get("/", (req, res) => {
    res.send('<h1> Welcome to my Assignment page</h1>');
});

// animals route to get info about one animal randomly:
// app.get("/animals", (req, res) => {
//     const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
//     res.send(randomAnimal);
// });

// animal route to see all animals in the data file:
app.get("/animals", (req, res) => {
    res.send(animals);
});

// This listen runs the PORT and starts the server:
app.listen(PORT, () => {
    console.log(`Server running at localhost:${PORT}`);
});
