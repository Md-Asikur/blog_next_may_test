const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController.js");
const authMiddleware = require("../middleware/authMiddleware.js");
const adminMiddleware = require("../middleware/adminMiddleware.js");

router.post("/register", UserController.registerUser);
router.post("/login", UserController.loginUser);

// Routes protected by authentication middleware
//  router.use(authMiddleware);
router.get("/profile",authMiddleware, UserController.getUserProfile);
router.put("/profile", UserController.updateUserProfile);
router.delete("/profile", UserController.deleteUserProfile);
// Routes protected by admin middleware
// router.use(adminMiddleware);

router.get("/get", UserController.getAllUser);


module.exports = router;
