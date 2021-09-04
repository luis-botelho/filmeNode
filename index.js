const express = require("express");
const app = express();
const port = 3000;
const Connect = require("./Db/db");
const routes = require("./routers/routes");
app.use(express.json());

// :comentando 
Connect("localhost", 27017, "movie");
app.get("/", (req, res) => {
  res.send("<h1>Funcionou</h1>");
});
app.use(routes);

app.listen(process.env.PORT || port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
