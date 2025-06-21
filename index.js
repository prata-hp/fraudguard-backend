// index.js
const express = require("express");
const cors = require("cors");
const app = express();
const reportRoute = require("./routes/reportRoute");

app.use(cors());
app.use(express.json());

app.get("/api/test", (req, res) => {
  res.json({ message: "Hello from backend! to h.p, deefuk and team ingenuity" });
});

app.use("/api", reportRoute); // ✅ This connects /api/report to reportRoute

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
// Temporary test
const db = require("./firebase");
db.collection("fraudReports").add({
  test: true,
  timestamp: Date.now()
}).then(() => console.log("✅ Firebase write successful"))
  .catch(err => console.error("❌ Firebase write failed:", err.message));
