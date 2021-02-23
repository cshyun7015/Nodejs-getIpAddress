const express = require("express");

const app = express();

const port = 3001;

var ip = require("ip");

app.set("port", port);

app.get("/", (req, res) => {
  res.send("IP Address : " + ip.address());
});

app.listen(port, () => console.log("Listening on", port));

module.exports = app;
