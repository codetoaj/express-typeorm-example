module.exports = {
  create: {
    required: [
      "username",
      "password"
    ],
    properties: {
      username: {
        type: "string"
      },
      password: {
        type: "string"
      }
    }
  }
}