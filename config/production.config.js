const path = require("path");

module.exports = {
    entry: "./ext/index.js",
    output: {
        path: path.resolve(__dirname, "../ext/dist"),
        filename: "bundle.js"
    }
}