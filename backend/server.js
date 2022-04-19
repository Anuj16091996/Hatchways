const express = require("express");
const cors = require("cors");
const axios = require("axios");
const PORT = 3001;

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hatchway Backend.");
});

app.listen(PORT);
console.log(`Running on port ${PORT}. `);
