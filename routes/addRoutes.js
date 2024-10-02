const express = require('express')
const router = express.Router()
var moment = require("moment");
const User = require("../models/customerSchema");
const userController = require('../Controller/userController')

router.get("", userController.user_add_get);
router.post("", userController.user_add_post);


module.exports = router