const Blog = require("../models/blogModel");

const blogController = {
  getAllBlogs: (req, res) => {
    Blog.find()
      .then((blogs) => {
        res.json(blogs);
      })
      .catch((error) => {
        res.status(500).json({ error: "An error occurred while fetching blogs" });
      });
  },

  createBlog: (req, res) => {
    const { title, content, author } = req.body;

    const newBlog = new Blog({
      title,
      content,
      author,
    });

    newBlog
      .save()
      .then((blog) => {
        res.status(201).json(blog);
      })
      .catch((error) => {
        res.status(500).json({ error: "An error occurred while creating the blog" });
      });
  },

  getBlogById: (req, res) => {
    const { id } = req.params;

    Blog.findById(id)
      .then((blog) => {
        if (blog) {
          res.json(blog);
        } else {
          res.status(404).json({ error: "Blog not found" });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: "An error occurred while fetching the blog" });
      });
  },

  updateBlog: (req, res) => {
    const { id } = req.params;
    const { title, content, author } = req.body;

    Blog.findByIdAndUpdate(id, { title, content, author }, { new: true })
      .then((updatedBlog) => {
        if (updatedBlog) {
          res.json(updatedBlog);
        } else {
          res.status(404).json({ error: "Blog not found" });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: "An error occurred while updating the blog" });
      });
  },

  deleteBlog: (req, res) => {
    const { id } = req.params;

    Blog.findByIdAndDelete(id)
      .then((deletedBlog) => {
        if (deletedBlog) {
          res.json({ message: "Blog deleted successfully" });
        } else {
          res.status(404).json({ error: "Blog not found" });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: "An error occurred while deleting the blog" });
      });
  },
};

module.exports = blogController;
