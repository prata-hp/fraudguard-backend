import pandas as pd
import joblib
from sklearn.ensemble import RandomForestClassifier
from feature_engineering import extract_features

# Load CSV file
df = pd.read_csv("../phishing_data.csv")  # adjust path if needed
df = df.dropna()

# Extract features from URL column
X = df['url'].apply(extract_features)
X = pd.DataFrame(X.tolist())
y = df['label']

# Train the model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X, y)

# Save the trained model
joblib.dump(model, 'rf_model.pkl')
