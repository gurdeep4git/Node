const express = require("express");
const app = express();
//var mw = require('./middleware.js')

const Validation = (req, res, next) => {
    if (req.params.name === "abc") {
        console.log("user validated");
    }
    else {
        console.log("user not validated");
    }
    next();
}

/*
// this is how to use middleware globally.
// it will work for all the routes
app.use(Validation);
*/
// app.use(mw(name));

app.get("/", (req, res) => res.send("Hello world"));

// this is how to use middleware for a particular route.
// it will work for users route only
app.get("/users/:name", Validation, (req, res) => {
    res.send("Hello user");
});

/*
app.get("/users/:id?", (req, res) => {
    req.params.id ? res.send(`Hello user ${req.params.id}`) : res.send(`Hello users`)
});
*/

app.listen("5000", () => console.log("server started"));
