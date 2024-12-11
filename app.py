import pickle
from flask import Flask, render_template, request

# Initialize Flask app
app = Flask(__name__)

# Load the trained model
model = pickle.load(open('logistic_regression_model.pkl', 'rb'))

# Home route
@app.route('/')
def home():
    return render_template('index.html', prediction_text='')

# Predict route
@app.route('/predict', methods=['POST'])
def predict():
    # Get the form data from the HTML form
    gender = int(request.form['Gender'])
    married = int(request.form['Married'])
    dependents = int(request.form['Dependents'])
    education = int(request.form['Education'])
    self_employed = int(request.form['Self_Employed'])
    property_area = int(request.form['Property_Area'])
    loan_amount = float(request.form['LoanAmount'])
    loan_amount_term = int(request.form['Loan_Amount_Term'])
    credit_history = int(request.form['Credit_History'])
    applicant_income = float(request.form['ApplicantIncome'])
    coapplicant_income = float(request.form['CoapplicantIncome'])

    # Create a list of features
    features = [gender, married, dependents, education, self_employed, property_area, loan_amount, loan_amount_term, 
                credit_history, applicant_income, coapplicant_income]

    # Predict loan status
    prediction = model.predict([features])

    # Return prediction result
    prediction_text = 'Loan Approved' if prediction[0] == 1 else 'Loan Rejected'
    return render_template('index.html', prediction_text=prediction_text)

if __name__ == "__main__":
    app.run(debug=True))
