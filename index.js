// index.js
const express = require("express");
const cors = require("cors");
const app = express();

const reportRoute = require("./routes/reportRoute");
const testRoute = require("./routes/testRoute"); // ✅ New import

app.use(cors());
app.use(express.json());

// ✅ Simple test route
app.get("/api/test", (req, res) => {
  res.json({ message: "Hello from backend! to h.p, deefuk and team ingenuity" });
});

// ✅ Mount API routes
app.use("/api", reportRoute);
app.use("/api", testRoute); // ✅ Mounting test route

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
