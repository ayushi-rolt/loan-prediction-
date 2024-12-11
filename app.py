from flask import Flask, render_template, request, jsonify
import pickle
import numpy as np

app = Flask(__name__)

# Load the pre-trained model
model = pickle.load(open('logistic_regression_model', 'rb'))

# Route to render the HTML page
@app.route('/')
def home():
    return render_template('index.html')

# Prediction API
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Retrieve form data
        features = [float(request.form[f'feature{i+1}']) for i in range(26)]
        features_array = np.array([features])
        prediction = model.predict(features_array)
        result = 'Approved' if prediction[0] == 1 else 'Rejected'
        return jsonify({'result': result})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == "__main__":
    app.run(debug=True)
