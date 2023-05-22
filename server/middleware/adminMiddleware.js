const adminMiddleware = (req, res, next) => {
  // Check if the user is authenticated
    console.log("admin",req.user)
  if (!req.user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // Check if the user has admin role
  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Forbidden" });
  }

  // User is authenticated and has admin role, proceed to the next middleware or route handler
  next();
};

module.exports = adminMiddleware;
