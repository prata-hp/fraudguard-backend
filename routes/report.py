import os
import joblib
from flask import Blueprint, request, jsonify
from model.feature_engineering import extract_features

report = Blueprint('report', __name__)

# Load model ONCE at startup
model_path = os.path.join(os.path.dirname(__file__), '..', 'model', 'rf_model.pkl')
model = joblib.load(model_path)

@report.route('/api/report', methods=['POST'])
def report_url():
    data = request.get_json()
    url = data.get('url')

    if not url:
        return jsonify({'error': 'URL is required'}), 400

    # Extract features
    features = extract_features(url)
    input_vector = [list(features.values())]  # sklearn expects 2D input

    # Predict
    prediction = model.predict(input_vector)[0]
    result = 'phishing' if prediction == 1 else 'safe'

    return jsonify({
        'url': url,
        'prediction': result
    })
