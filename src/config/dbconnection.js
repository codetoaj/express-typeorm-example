const { createConnection } = require("typeorm");

createConnection({
  type: "mariadb",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "admin12",
  database: "testtypeorm",
  entities: [
    require("../schemas/Test.js"),
    require("../schemas/Users.js")
  ],
  synchronize: true
})