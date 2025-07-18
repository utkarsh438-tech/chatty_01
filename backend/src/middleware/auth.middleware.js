import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
<<<<<<< HEAD
    if (!token) {
      return res.status(401).json({ message: "Not authorized, no token" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(401).json({ message: "Not authorized, user not found" });
    }
=======

    if (!token) {
      return res.status(401).json({ message: "Not authorized, no token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(401).json({ message: "Not authorized, user not found" });
    }

>>>>>>> 7e38e2c6ce0315ab7f20bc64695371261ff2db55
    req.user = user;
    next();
  } catch (error) {
    console.log("Error in protectRoute middleware", error);
    res.status(401).json({ message: "Not authorized, token failed" });
  }
}; 