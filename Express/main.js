const express = require("express");
const app = express();

app.get("/", (eq, res) => res.send("Hello world"));
app.get("/users", (eq, res) => res.send("Hello users"));

app.listen("5000", () => console.log("server started"));

