const express = require("express");
const cors = require("cors");
require("dotenv").config();

const  authRoutes = require("./routes/auth.routes");
const protectedRoutes = require("./routes/protected.routes");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Backend is running" });
});

app.use("/auth", authRoutes);
app.use("/protected", protectedRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

