console.log("📩 Received POST with:", req.body);

const express = require("express");
const router = express.Router();
const db = require("../firebase");

router.post("/report", async (req, res) => {
  const { url, reason, timestamp } = req.body;
  console.log("📩 New Report Received:", { url, reason, timestamp });

  try {
    await db.collection("fraudReports").add({
      url,
      reason,
      timestamp: timestamp || Date.now()
    });
    res.status(200).json({ message: "Report saved to Firebase" });
  } catch (error) {
    console.error("🔥 Error saving report:", error);
    res.status(500).json({ error: "Failed to save report" });
  }
});

module.exports = router;

console.log("📩 Received POST with:", req.body);

