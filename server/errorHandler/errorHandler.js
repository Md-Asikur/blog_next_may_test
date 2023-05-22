const errorHandler = (err, req, res, next) => {
  console.error(err); // Log the error for debugging purposes
if (err.name === "MongoError") {
  // Handle MongoDB server errors
  if (err.code === 11000) {
    // Duplicate key error
    return res.status(400).json({ error: "Duplicate key error" });
  } else if (err.message.includes("Server selection error")) {
    // Server selection error
    return res.status(500).json({ error: "Server selection error" });
  } else {
    // Other MongoDB server errors
    return res.status(500).json({ error: "MongoDB server error" });
  }
}

  if (err.name === "ValidationError") {
    // Handle Mongoose validation errors
    const errors = Object.values(err.errors).map((error) => error.message);
    return res.status(400).json({ error: errors });
  }

  if (err.name === "UnauthorizedError") {
    // Handle unauthorized errors (e.g., JWT authentication failure)
    return res.status(401).json({ error: "Unauthorized" });
  }

  if (err.name === "SyntaxError") {
    // Handle syntax errors (e.g., invalid JSON syntax in request body)
    return res.status(400).json({ error: "Invalid syntax" });
  }

  if (err.name === "CastError") {
    // Handle cast errors (e.g., invalid MongoDB document ID format)
    return res.status(400).json({ error: "Invalid parameter" });
  }

  // Handle other types of errors
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  res.status(statusCode).json({ error: message });
};

module.exports = errorHandler;
