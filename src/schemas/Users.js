const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "users",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    username: {
      type: "varchar"
    },
    password: {
      type: "text"
    }
  }
});