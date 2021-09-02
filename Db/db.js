const mongoose = require("mongoose");

function Connection(url, port, db) {
  mongoose
    .connect(`mongodb://${url}:${port}/${db}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connection established");
    })
    .catch((error) => {
      console.error("Connection not established", error.message);
    });
}

module.exports = Connection;
