const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const locationArray = require("./locationArray");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const PORT = 8080;

//get all locations
app.get("/", (req, res) => {
  const limit = 4;
  const newArray = locationArray.slice(0, limit);
  res.json(newArray);
});

app.get("/:locationId", (req, res) => {
  const targetLocationId = req.params.locationId;
  let match = locationArray.find((location) => {
    return targetLocationId === location._id;
  });
  res.json(match);
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
