const express = require("express");
const router = express.Router();
const { authenticate } = require("../middlewares/auth.middleware");
const PackageController = require("../controllers/package.controller");
const { createBooking } = require("../controllers/booking.controller");
const { createComment } = require("../controllers/evalute.controller");
const {getSlide} = require('../controllers/slides.controller')
//Package router
// router.get("/packages", PackageController.se);
router.get("/package/:id", PackageController.getPackageById);

//Booking router
router.post("/:package_id", createBooking);

//Comment router
router.post("/comment", createComment);

//Slide router
router.get("/get-slide", getSlide);

module.exports = router;
