require("reflect-metadata")
const express = require("express");
const app = express();
require("./config/dbconnection");
const bodyParser = require("body-parser")
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require("./swagger/doc.js");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    code: "SERVER_ONLINE",
    clientIP: req.ip
  });
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/user", require("./controllers/user"));

app.listen(8080);