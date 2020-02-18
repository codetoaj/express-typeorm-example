const definitions = require("./definitions")

module.exports = {
  swagger: "2.0",
  info: {
    description: "Express Typeorm api application",
    version: "0.0.1",
    title: "Swagger for Express Typeorm application",
    contact: {
      email: "codetoaj@gmail.com",
    },
    license: {
      name: "Apache 2.0",
      url:"http://www.apache.org/licenses/LICENSE-2.0.html"
    }
  },
  host: "localhost:8080",
  basePath: "/",
  tags: [
    {
      name: "User",
      description: "APIs for user management"
    }
  ],
  paths: {
    "/user/create": {
      post: {
        tags: ["User"],
        summary: "Create new user",
        description: "Create new user",
        parameters: [
          {
            in: "body",
            name: "userData",
            description: "Json data of user model",
            required: true,
            schema: {
              $ref: "#/definitions/model/user/create"
            }
          }
        ],
        responses: {
          200: {
            description: "Returns created user record",
            schema: {
              $ref: "#/definitions/response/200"
            }
          }
        }
      }
    },
    "/user/list": {
      get: {
        tags: ["User"],
        summary: "Get list of users",
        description: "Get list of users",
        procedures: ["application/json"],
        parameters: [
          {
            name: "page",
            in: "query",
            description: "Number of pages",
            required: false
          },
          {
            name: "limit",
            in: "query",
            description: "Number of records per page",
            required: false
          },
        ],
        responses: {
          200: {
            description: "Returns list of users",
            schema: {
              $ref: "#/definitions/response/200"
            }
          }
        }
      }
    }
  },
  definitions
}