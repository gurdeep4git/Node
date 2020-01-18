const fs = require("fs");

fs.readFile(__dirname + "/text.txt", "utf8", (_err, data) => {
    if (data) {
        console.log(data);
    } else {
        console.log(err);
    }
});
