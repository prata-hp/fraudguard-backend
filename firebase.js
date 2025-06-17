// firebase.js (in FRAUDGUARD-BACKEND root)
const admin = require("firebase-admin");

// ✅ Loads Firebase service account credentials from environment variable (as a JSON string)
const serviceAccount = JSON.parse(process.env.FIREBASE_CONFIG);

// ✅ Initializes Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// ✅ Creates Firestore database reference
const db = admin.firestore();

// ✅ Exports Firestore instance to be used in routes
module.exports = db;
