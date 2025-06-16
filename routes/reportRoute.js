
const express = require("express");
const router = express.Router();
const db = require("../firebase"); // Make sure firebase.js exports the correct Firestore instance

// POST route to handle fraud report submissions
router.post("/report", async (req, res) => {
  const { url, reason, timestamp } = req.body;

  // ✅ Log received data safely
  console.log("📩 New Report Received:", { url, reason, timestamp });

  try {
    // ✅ Save the report to Firebase Firestore
    await db.collection("fraudReports").add({
      url,
      reason,
      timestamp: timestamp || Date.now()
    });

    // ✅ Respond to extension
    res.status(200).json({ message: "Report saved to Firebase" });
  } catch (error) {
    console.error("🔥 Error saving report:", error);
    res.status(500).json({ error: "Failed to save report" });
  }
});

module.exports = router;
