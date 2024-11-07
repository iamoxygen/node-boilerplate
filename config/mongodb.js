const mongoose = require("mongoose");
const { uri, title } = require("../helper/environment");
const { logger } = require("../helper/ErrorHandler");

(function () {
    try {
        mongoose
            .connect(uri ?? "")
            .then((value) =>
                console.log(`${title ?? "unknown"} db is connected successfully`)
            )
            .catch((value) => console.log(`Db connection error`, value));
    } catch (error) {
        logger(error)
    }
})()