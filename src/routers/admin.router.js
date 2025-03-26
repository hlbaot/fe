const express = require("express");
const router = express.Router();
const { login } = require("../controllers/admin.controller");
const { authenticate, checkAdmin } = require("../middlewares/auth.middleware");
const PackageController = require("../controllers/package.controller");
const { createProduct } = require("../controllers/product.controller");
const BookingController = require("../controllers/booking.controller");
const {getComment, deleteComment} = require("../controllers/evalute.controller");

//Login Router
router.post("/login", login);

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

module.exports = router;
