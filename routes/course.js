const express = require("express");
const router = express.Router({mergeParams : true});

const courseController = require("../controllers/course.js");

router.get("/",courseController.root);

module.exports = router;