const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const {
  getUserById,
  getUser,
  updateUser,
  userPurchaseList,
  getAllUser,
} = require("../controllers/user");

const {contactUs} = require("../controllers/contactUs");

const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");

router.param("userId", getUserById);
router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);
router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);

router.get("/users", isSignedIn, isAuthenticated, isAdmin, getAllUser);

router.get(
  "/orders/user/:userId",
  isSignedIn,
  isAuthenticated,
  userPurchaseList
);

router.post(
  "/contactus",
  [
    check("name", "name should be at least 3 char").isLength({ min: 3 }),
    check("email", "email is required").isEmail(),
    check("query", "password should be at least 3 char").isLength({
      min: 3,
    }),
  ],
  contactUs
);

module.exports = router;
