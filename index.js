if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}

const express = require("express");
const app = express();
const port = 3000;
const Connect = require("./Db/db");
const routes = require("./routers/routes");
app.use(express.json());

const dbUrl = process.env.DB_URL;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbData =  process.env.DB_DATA;
console.log(dbUrl, dbUser, dbPassword, dbData)
Connect(dbUrl, dbUser, dbPassword, dbData);

app.get("/", (req, res) => {
  res.send("<h1>Funcionou</h1>");
});
app.use(routes);

app.listen(process.env.PORT || port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
'mongodb+srv://luis:6xMByHoGCr7F9QTr@cluster0.sxthp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' 