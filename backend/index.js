const express = require("express");
const bodyParser = require("body-parser");
//const cors = require("cors");

const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(bodyParser.json());

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//   })
// );

const PORT = 8080;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
});

app.get("/dev/netwila/user/login", (req, res) => {
  req(
    {
      url:
        "https://k0kgl3su40.execute-api.us-east-2.amazonaws.com/dev/netwila/user/login",
    },
    (error, res, body) => {
      if (error || res.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
