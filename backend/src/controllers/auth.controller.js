const jwt = require("jsonwebtoken");

// Dummy in-memory user store (temporary)
const users = [];

exports.sendOtp = (req, res) => {
  const { phone } = req.body;

  if (!phone) {
    return res.status(400).json({ message: "Phone number required" });
  }

  // Dummy OTP
  console.log(`OTP for ${phone} is 123456`);

  res.json({ success: true, message: "OTP sent (dummy)" });
};

exports.verifyOtp = (req, res) => {
  const { phone, otp } = req.body;

  if (!phone || !otp) {
    return res.status(400).json({ message: "Phone and OTP required" });
  }

  if (otp !== "123456") {
    return res.status(401).json({ message: "Invalid OTP" });
  }

  let user = users.find(u => u.phone === phone);

  if (!user) {
    user = {
      id: users.length + 1,
      phone,
      role: "USER",
    };
    users.push(user);
  }

  const token = jwt.sign(
    { userId: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.json({
    token,
    user,
  });
};

