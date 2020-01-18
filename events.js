const customEvents = require("./customEvents");
const events = require("events");
const event = new events.EventEmitter();

const person = {
    name: "John"
};

event.on(customEvents.events.click, user => console.log("Current User", user));
event.emit(customEvents.events.click, person);
