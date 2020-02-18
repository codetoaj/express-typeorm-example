const express = require("express");
const router = express.Router();
const { RES, USER } = require("../helpers/constants");
const UserService = require("../services/user");

// create new user
router.post("/create", async (req, res) => {
  const data = req.body;
  const result = await new UserService().create(data)
  const response = {} ;
  if (result && result.id) {
    response.status = RES.SUCCESS;
    response.message = USER.CREATE_SUCCESS;
    response.data = result;
  } else {
    response.status = RES.ERROR;
    response.message = USER.CREATE_ERROR;
  }
  res.json(response);
});

// list available user
router.get("/list", async (req, res) => {
  const query = req.query;
  const result = await new UserService().list(query);
  const response = {};
  if (result && result.length) {
    response.status = RES.SUCCESS;
    response.message = USER.USER_LIST;
    response.data = result[0];
    response.count = result[1];
  } else {
    response.status = RES.SUCCESS;
    response.message = USER.NO_USERS;
    response.data = [];
  }
  res.json(response);
});

module.exports = router;
