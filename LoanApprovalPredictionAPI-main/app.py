from flask import Flask, request, jsonify
import pickle
import pandas as pd
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
@app.route('/')
def API():
    return "API Listening......."
# Load the trained model
with open("random_forest_classifier.pkl", "rb") as f:
    model = pickle.load(f)

# Define a route for receiving input data and returning predictions
@app.route('/predict', methods=[ 'POST'])
def predict():
    # Get the JSON object sent in the request
    json_data = request.get_json()

    # Extracting data from JSON
    gender = json_data['Gender']
    married = json_data['Married']
    dependents = json_data['Dependents']
    education = json_data['Education']
    self_employed = json_data['Self_Employed']
    applicant_income = json_data['ApplicantIncome']
    coapplicant_income = json_data['CoapplicantIncome']
    loan_amount = json_data['LoanAmount']
    loan_amount_term = json_data['Loan_Amount_Term']
    property_area = json_data['Property_Area']

    # Replace categorical strings with numerical values
    gender = 0 if gender == 'Male' else 1
    married = 0 if married == 'Yes' else 1
    dependents = 1 if dependents == '1' else (0 if dependents == '0' else (3 if dependents == '3' else 2))
    education = 0 if education == 'Graduate' else 1
    self_employed = 0 if self_employed == 'No' else 1
    property_area = 0 if property_area == 'Rural' else (1 if property_area == 'Urban' else 2)

    # Make predictions
    predictions = model.predict([[gender, married, dependents, education, self_employed, applicant_income,
                                   coapplicant_income, loan_amount, loan_amount_term, property_area]])

    # Convert predictions to loan status
    Prediction=""
    if predictions==True:
        Prediction="Yes"
    else:
        Prediction="No"
    # Return predictions in JSON format with string values
    return jsonify({'Loan_Status':Prediction})

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True ,host='0.0.0.0',port=8080)
