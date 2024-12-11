
import { Formik, Field, Form, ErrorMessage } from 'formik';
import './App.css'; // Assuming you're using an external CSS file for better practice

const App = () => {
  const initialValues = {
    Gender: '1',
    Married: '1',
    Dependents: '',
    Education: '0',
    Self_Employed: '1',
    Property_Area: '0',
    LoanAmount: '',
    Loan_Amount_Term: '',
    Credit_History: '1',
    ApplicantIncome: '',
    CoapplicantIncome: ''
  };

  const handleSubmit = (values) => {
    console.log(values);
    // You can handle form submission logic here, e.g., sending the data to a server
  };

  const validate = (values) => {
    const errors = {};
    if (!values.LoanAmount) {
      errors.LoanAmount = 'Loan Amount is required';
    }
    if (!values.ApplicantIncome) {
      errors.ApplicantIncome = 'Applicant Income is required';
    }
    return errors;
  };

  return (
    <div className="form-container bg-orange-300 p-12 md:p-14 lg:p-16 xl:p-20">
      <section>
        <h1>Loan prediction</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validate={validate}
        >
          <Form>
            <div className="form-group">
              <label htmlFor="Gender">Gender:</label>
              <Field as="select" name="Gender" id="Gender">
                <option value="1">Male</option>
                <option value="0">Female</option>
              </Field>
            </div>

            <div className="form-group">
              <label htmlFor="Married">Married:</label>
              <Field as="select" name="Married" id="Married">
                <option value="1">Yes</option>
                <option value="0">No</option>
              </Field>
            </div>

            <div className="form-group">
              <label htmlFor="Dependents">Dependents:</label>
              <Field type="number" name="Dependents" id="Dependents" />
            </div>

            <div className="form-group">
              <label htmlFor="Education">Education:</label>
              <Field as="select" name="Education" id="Education">
                <option value="0">Graduate</option>
                <option value="1">Not Graduate</option>
              </Field>
            </div>

            <div className="form-group">
              <label htmlFor="Self_Employed">Self Employed:</label>
              <Field as="select" name="Self_Employed" id="Self_Employed">
                <option value="1">Yes</option>
                <option value="0">No</option>
              </Field>
            </div>

            <div className="form-group">
              <label htmlFor="Property_Area">Property Area:</label>
              <Field as="select" name="Property_Area" id="Property_Area">
                <option value="0">Urban</option>
                <option value="1">Semiurban</option>
                <option value="2">Rural</option>
              </Field>
            </div>

            <div className="form-group">
              <label htmlFor="LoanAmount">Loan Amount:</label>
              <Field type="number" name="LoanAmount" id="LoanAmount" />
              <ErrorMessage name="LoanAmount" component="div" style={{ color: 'red' }} />
            </div>

            <div className="form-group">
              <label htmlFor="Loan_Amount_Term">Loan Amount Term:</label>
              <Field type="number" name="Loan_Amount_Term" id="Loan_Amount_Term" />
            </div>

            <div className="form-group">
              <label htmlFor="Credit_History">Credit History:</label>
              <Field as="select" name="Credit_History" id="Credit_History">
                <option value="1">Good</option>
                <option value="0">Bad</option>
              </Field>
            </div>

            <div className="form-group">
              <label htmlFor="ApplicantIncome">Applicant Income:</label>
              <Field type="number" name="ApplicantIncome" id="ApplicantIncome" />
              <ErrorMessage name="ApplicantIncome" component="div" style={{ color: 'red' }} />
            </div>

            <div className="form-group">
              <label htmlFor="CoapplicantIncome">Coapplicant Income:</label>
              <Field type="number" name="CoapplicantIncome" id="CoapplicantIncome" />
            </div>

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </section>
    </div>
  );
};

export default App;
