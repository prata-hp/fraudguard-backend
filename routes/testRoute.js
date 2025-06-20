const express = require("express");
const router = express.Router();
const db = require("../firebase"); // Firestore instance

// 🚀 Test Firestore connection
router.get("/test-firebase", async (req, res) => {
  try {
    const testDoc = {
      message: "Hello from Render!",
      timestamp: Date.now(),
    };

    await db.collection("testCollection").add(testDoc);

    res.status(200).json({
      message: "✅ Successfully wrote to Firestore",
      testDoc,
    });
  } catch (error) {
    console.error("🔥 Firestore test error:", error);
    res.status(500).json({ error: "❌ Firestore test failed" });
  }
});

module.exports = router;
