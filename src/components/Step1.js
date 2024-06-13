/*import React, { useState } from 'react';
import './Step1.css';

const Step1 = ({ nextStep, handleChange, values }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!values.firstName) tempErrors.firstName = "First Name is required.";
    if (!values.lastName) tempErrors.lastName = "Last Name is required.";
    if (!values.email) tempErrors.email = "Email is required.";
    if (!values.phoneNumber) tempErrors.phoneNumber = "Phone Number is required.";
    if (!values.password) tempErrors.password = "Password is required.";
    if (values.password !== values.confirmPassword) tempErrors.confirmPassword = "Passwords do not match.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) nextStep();
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Create New Account</h2>
      </div>
      <div className="form-container">
        <div className="form-header">
          <div className="step-indicator">
            <span className="active">1. Your Profile</span>
            <span>2. Business Information</span>
            <span>3. Additional Users</span>
          </div>
        </div>
        <div className="form-body">
          <h3>Step 1: Your Profile</h3>
          <form>
            <input 
              type="text" 
              name="firstName" 
              placeholder="First Name" 
              value={values.firstName} 
              onChange={handleChange} 
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}

            <input 
              type="text" 
              name="lastName" 
              placeholder="Last Name" 
              value={values.lastName} 
              onChange={handleChange} 
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}

            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              value={values.email} 
              onChange={handleChange} 
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <input 
              type="text" 
              name="phoneNumber" 
              placeholder="Phone Number" 
              value={values.phoneNumber} 
              onChange={handleChange} 
            />
            {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}

            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              value={values.password} 
              onChange={handleChange} 
            />
            {errors.password && <p className="error">{errors.password}</p>}

            <input 
              type="password" 
              name="confirmPassword" 
              placeholder="Confirm Password" 
              value={values.confirmPassword} 
              onChange={handleChange} 
            />
            {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

            <div className="form-footer">
              <button type="button" className="back-button" onClick={() => window.location.href = '/login'}>
                Back to Login
              </button>
              <button type="button" className="next-button" onClick={handleNext}>
                Next Step
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Step1;*/
import React, { useState } from 'react';
import './Step1.css';

const Step1 = ({ nextStep, handleChange, values }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!values.firstName) tempErrors.firstName = "First Name is required.";
    if (!values.lastName) tempErrors.lastName = "Last Name is required.";
    if (!values.email) tempErrors.email = "Email is required.";
    if (!values.phoneNumber) tempErrors.phoneNumber = "Phone Number is required.";
    if (!values.password) tempErrors.password = "Password is required.";
    if (values.password !== values.confirmPassword) tempErrors.confirmPassword = "Passwords do not match.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) nextStep();
  };

  return (
    <div className="main-container">
      <div className="header">
        <h2>Create New Account</h2>
      </div>
      <div className="form-container">
        <div className="form-header">
          <div className="step-indicator">
            <span className="active">1. Your Profile</span>
            <span>2. Business Information</span>
            <span>3. Additional Users</span>
          </div>
        </div>
        <div className="form-body">
          <h3>Step 1: Your Profile</h3>
          <form>
            <div className="row">
              <input 
                type="text" 
                name="firstName" 
                placeholder="First Name" 
                value={values.firstName} 
                onChange={handleChange} 
              />
              {errors.firstName && <p className="error">{errors.firstName}</p>}

              <input 
                type="text" 
                name="lastName" 
                placeholder="Last Name" 
                value={values.lastName} 
                onChange={handleChange} 
              />
              {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>

            <div className="row">
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={values.email} 
                onChange={handleChange} 
              />
              {errors.email && <p className="error">{errors.email}</p>}

              <input 
                type="text" 
                name="phoneNumber" 
                placeholder="Phone Number" 
                value={values.phoneNumber} 
                onChange={handleChange} 
              />
              {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
            </div>

            <div className="row">
              <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                value={values.password} 
                onChange={handleChange} 
              />
              {errors.password && <p className="error">{errors.password}</p>}

              <input 
                type="password" 
                name="confirmPassword" 
                placeholder="Confirm Password" 
                value={values.confirmPassword} 
                onChange={handleChange} 
              />
              {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
            </div>
          </form>
        </div>
      </div>
      <div className="form-footer">
        <button type="button" className="back-button" onClick={() => window.location.href = '/login'}>
          Back to Login
        </button>
        <button type="button" className="next-button" onClick={handleNext}>
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Step1;

