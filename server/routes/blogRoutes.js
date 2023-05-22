// blogRoutes.js

const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController.js");

router.get("/get", blogController.getAllBlogs);
router.post("/create", blogController.createBlog);
router.get("/getsingle/:id", blogController.getBlogById);
router.put("/update/:id", blogController.updateBlog);
router.delete("/delete/:id", blogController.deleteBlog);

module.exports = router;
