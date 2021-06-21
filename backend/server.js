const express = require("express");

const notes = require("./data/notes");

const app = express();

const dotenv = require('dotenv');
dotenv.config();

app.get('/',(req,res) => {
    res.send("API Is running");
}); //get request brings data from backend(from database) to the frontend and serves it

app.get('/api/notes',(req,res) => {
    res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
  const note=notes.find((n)=> n._id === req.params.id);
  res.send(note);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`Server started at PORT ${PORT}`));

