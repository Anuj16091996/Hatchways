const express = require("express");
const cors = require("cors");
const PORT = 3001;
const RouteController = require("./controllers/routes.controller");
const request = require("supertest");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hatchway Backend.");
});

app.get("/api/ping", RouteController.routeOne);

app.get("/api/posts", RouteController.routeTwo);

request(app)
  .get("/api/ping")
  .expect("Content-Type", /json/)
  .expect(200)
  .end((err, res) => {
    if (err) throw err;
  });

request(app)
  .get("/api/posts")
  .expect("Content-Type", /json/)
  .end((err, res) => {
    if (err) throw err;
  });

app.listen(PORT);
console.log(`Running on port ${PORT}. `);
