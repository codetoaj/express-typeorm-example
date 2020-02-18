module.exports = {
  200: {
    properties: {
      status: {
        type: "string",
        enum: ["success", "error"] 
      },
      message: {
        type: "string"
      },
      data: {
        type: "object"
      }
    }
  }
}