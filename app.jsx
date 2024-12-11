import React, { useState } from 'react';

function app() {
  const [prediction, setPrediction] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from submitting normally

    const formData = new FormData(e.target);

    try {
      const response = await fetch('/predict', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setPrediction(`Prediction: ${data.prediction}`);
    } catch (error) {
      console.error('Error:', error);
      setPrediction('Error occurred while fetching prediction.');
    }
  };

  return (
    <div>
      <h1>Loan Prediction</h1>
      <form id="predictionForm" onSubmit={handleSubmit}>
        {/* Basic Details */}
        <div className="form-group">
          <label htmlFor="CODE_GENDER">Gender</label>
          <select id="CODE_GENDER" name="CODE_GENDER">
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="FLAG_OWN_CAR">Own a Car?</label>
          <select id="FLAG_OWN_CAR" name="FLAG_OWN_CAR">
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="FLAG_OWN_REALTY">Own Real Estate?</label>
          <select id="FLAG_OWN_REALTY" name="FLAG_OWN_REALTY">
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="CNT_CHILDREN">Number of Children</label>
          <input type="number" id="CNT_CHILDREN" name="CNT_CHILDREN" min="0" defaultValue="0" />
        </div>

        {/* Financial Details */}
        <div className="form-group">
          <label htmlFor="AMT_INCOME_TOTAL">Total Income</label>
          <input type="number" id="AMT_INCOME_TOTAL" name="AMT_INCOME_TOTAL" required />
        </div>
        <div className="form-group">
          <label htmlFor="AMT_CREDIT">Credit Amount</label>
          <input type="number" id="AMT_CREDIT" name="AMT_CREDIT" required />
        </div>
        <div className="form-group">
          <label htmlFor="AMT_ANNUITY">Annuity Amount</label>
          <input type="number" id="AMT_ANNUITY" name="AMT_ANNUITY" required />
        </div>
        <div className="form-group">
          <label htmlFor="AMT_GOODS_PRICE">Goods Price</label>
          <input type="number" id="AMT_GOODS_PRICE" name="AMT_GOODS_PRICE" required />
        </div>

        {/* Personal Details */}
        <div className="form-group">
          <label htmlFor="NAME_INCOME_TYPE">Income Type</label>
          <select id="NAME_INCOME_TYPE" name="NAME_INCOME_TYPE">
            <option value="Working">Working</option>
            <option value="Commercial associate">Commercial associate</option>
            <option value="Pensioner">Pensioner</option>
            <option value="State servant">State servant</option>
            <option value="Student">Student</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="NAME_EDUCATION_TYPE">Education Level</label>
          <select id="NAME_EDUCATION_TYPE" name="NAME_EDUCATION_TYPE">
            <option value="Higher education">Higher education</option>
            <option value="Incomplete higher">Incomplete higher</option>
            <option value="Secondary">Secondary</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="NAME_FAMILY_STATUS">Family Status</label>
          <select id="NAME_FAMILY_STATUS" name="NAME_FAMILY_STATUS">
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Widow">Widow</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="NAME_HOUSING_TYPE">Housing Type</label>
          <select id="NAME_HOUSING_TYPE" name="NAME_HOUSING_TYPE">
            <option value="House / apartment">House / apartment</option>
            <option value="Rented">Rented</option>
            <option value="With parents">With parents</option>
          </select>
        </div>

        {/* Other Details */}
        <div className="form-group">
          <label htmlFor="DAYS_BIRTH">Age (years)</label>
          <input type="number" id="DAYS_BIRTH" name="DAYS_BIRTH" min="18" required />
        </div>
        <div className="form-group">
          <label htmlFor="DAYS_EMPLOYED">Employment Duration (years)</label>
          <input type="number" id="DAYS_EMPLOYED" name="DAYS_EMPLOYED" required />
        </div>
        <div className="form-group">
          <label htmlFor="DAYS_REGISTRATION">Years Since Registration</label>
          <input type="number" id="DAYS_REGISTRATION" name="DAYS_REGISTRATION" required />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div id="result">{prediction}</div>
    </div>
  );
}

export default app;

