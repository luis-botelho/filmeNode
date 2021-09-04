const mongoose = require("mongoose");

function Connection() {
  mongoose
    .connect('mongodb+srv://luis:6xMByHoGCr7F9QTr@cluster0.sxthp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' , {
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
//  `mongodb://${url}:${port}/${db}`