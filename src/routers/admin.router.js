const express = require("express");
const router = express.Router();
const { login, logout } = require("../controllers/admin.controller");
const { authenticate, checkAdmin } = require("../middlewares/auth.middleware");
const PackageController = require("../controllers/package.controller");
const { createProduct } = require("../controllers/product.controller");
const BookingController = require("../controllers/booking.controller");
const {getComment, deleteComment} = require("../controllers/evalute.controller");
const {created, getSlide} = require('../controllers/slides.controller');
// const { createdSlide } = require("../services/slides.service");
//Login Router
router.post("/login", login);

//Logout Router
router.post('/logout', logout);

//Booking Router
router.get("/customer", authenticate, checkAdmin, BookingController.getAllBookings);

//Products Router
router.post("/product/:packageId", authenticate, checkAdmin, createProduct);

//Packages Router
router.get("/packages", authenticate, checkAdmin, PackageController.getAllPackages);
router.get("/package/:id", authenticate, checkAdmin, PackageController.getPackageById);
router.post("/create", authenticate, checkAdmin, PackageController.createPackage);

//Comment Router
router.get("/comment", authenticate, checkAdmin, getComment);
router.delete("/comment/:id", authenticate, checkAdmin, deleteComment);


//Slide Router
router.post("/createSlide", authenticate, checkAdmin, created);


module.exports = router;
