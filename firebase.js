// firebase.js
const admin = require("firebase-admin");
const serviceAccount = require("./fraudguarddb-firebase-adminsdk-fbsvc-3591440b40.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = db;
