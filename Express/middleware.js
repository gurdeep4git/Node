module.exports = (name) => {
    return (req, res, next) => {
        if (req.params.name === "abc") {
            console.log("user validated");
        }
        else {
            console.log("user not validated");
        }
        next();
    }
}