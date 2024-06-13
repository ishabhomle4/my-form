import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
// import Step2 from './Step2'; // We'll add this later

const MainForm = () => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    // Additional fields for Step 2
    // brandName: '',
    // streetAddress: '',
    // zipCode: '',
    // city: '',
    // taxIDNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
    localStorage.setItem(name, value);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  switch (step) {
    case 1:
      return <Step1 nextStep={nextStep} handleChange={handleChange} values={formValues} />;
    case 2:
      return <Step2 prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={formValues} />;
    default:
      return <h2>All steps completed!</h2>;
  }

};

export default MainForm;
