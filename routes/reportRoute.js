const express = require("express");
const router = express.Router();
const db = require("../firebase"); // Firestore instance via Admin SDK

// ✅ POST route to handle fraud report submissions
router.post("/report", async (req, res) => {
  const { url, reason, timestamp, userId } = req.body;

  console.log("📩 New Report Received:", {
    url,
    reason,
    timestamp,
    userId: userId || "anonymous"
  });

  try {
    const reportData = {
      url,
      reason,
      timestamp: timestamp || Date.now(),
      userId: userId || "anonymous"
    };

    await db.collection("fraudReports").add(reportData);

    res.status(200).json({
      message: "Report saved to Firebase",
      report: reportData
    });
  } catch (error) {
    console.error("🔥 Error saving report to Firebase:", error.message, error.stack);

    res.status(500).json({ error: "Failed to save report" });
  }
});

// ✅ GET route to test Firebase connection
router.get("/test-firebase", async (req, res) => {
  try {
    const testDoc = {
      testMessage: "🧪 Firestore connection test successful!",
      timestamp: Date.now()
    };

    await db.collection("testCollection").add(testDoc);

    res.status(200).json({
      message: "✅ Successfully wrote to Firestore",
      data: testDoc
    });
  } catch (error) {
    console.error("🔥 Firestore test error:", error);
    res.status(500).json({ error: "❌ Firestore test failed" });
  }
});

module.exports = router;
