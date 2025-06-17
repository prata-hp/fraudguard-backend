
const express = require("express");
const router = express.Router();
const db = require("../firebase"); // Firestore instance

// POST route to handle fraud report submissions
router.post("/report", async (req, res) => {
  const { url, reason, timestamp, userId } = req.body;

  // ✅ Log received data including optional userId
  console.log("📩 New Report Received:", {
    url,
    reason,
    timestamp,
    userId: userId || "anonymous"
  });

  try {
    // ✅ Save the report to Firebase Firestore
    const reportData = {
      url,
      reason,
      timestamp: timestamp || Date.now(),
      userId: userId || "anonymous"
    };

    await db.collection("fraudReports").add(reportData);

    // ✅ Respond to extension
    res.status(200).json({
      message: "Report saved to Firebase",
      report: reportData
    });
  } catch (error) {
    console.error("🔥 Error saving report:", error);
    res.status(500).json({ error: "Failed to save report" });
  }
});

module.exports = router;
