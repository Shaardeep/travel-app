const express = require("express");
const router = express.Router();
const {
  authenticate,
  authorize,
} = require("../middlewares/auth.middleware");

router.get(
  "/user",
  authenticate,
  (req, res) => {
    res.json({
      message: "User access granted",
      user: req.user,
    });
  }
);

router.get(
  "/admin",
  authenticate,
  authorize(["ADMIN"]),
  (req, res) => {
    res.json({
      message: "Admin access granted",
    });
  }
);

module.exports = router;

