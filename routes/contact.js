const express = require("express");
const router = express.Router({mergeParams : true});
const contactController = require("../controllers/contact.js");


router.get("/hod", contactController.displayHOD);

router.get("/admission",contactController.displayAdmCommitee);

module.exports = router;