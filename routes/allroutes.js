const express = require('express')
const router = express.Router()
var moment = require("moment");
const User = require("../models/customerSchema");
const userController = require('../Controller/userController')
// GET Requst
router.get("/", userController.user_index_get);
 
  router.get("/edit/:id", userController.user_edit_get);
  
  router.get("/view/:id", userController.user_view_get);
  
  // POST Requst
  router.post("/search", userController.user_search_post);
  
  // DELETE Request
  router.delete("/user/:id", userController.user_delete);
  // put request
  router.put("/edit/:id", userController.user_edit_put);


  module.exports = router