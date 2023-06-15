const jwt = require("jsonwebtoken");
const { getToken } = require("next-auth/jwt");
const SECRET = process.env.JWT_SECRET;
const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    const secret = process.env.JWT_SECRET; // Replace with your own secret key

    const token1 = req.cookies["next-auth.session-token"];
    if (token1) {
      const token2 = await getToken({
        req,
        secret,
        encryption: true,
        maxAge: 30 * 24 * 60 * 60, // Maximum age of the token in seconds (adjust as needed)
      });
      const userId = token2.sub;
      req.user = userId;
      next();
    } else if (token) {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      // console.log("deced",decodedToken)
      req.user = decodedToken.userId;
      next();
    }
    else {
      return res.status(401).json({ error: "Plese Login First", err1: error });;
    }
  } catch (error) {
    res.status(401).json({ error: "Authentication failed", err1: error });
  }
};

module.exports = authMiddleware;
