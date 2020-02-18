const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "test",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    title: {
      type: "varchar"
    },
    description: {
      type: "text"
    }
  }
});