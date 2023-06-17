import React, { useState } from 'react';
import './ForgetPasswordForm.css';

const ForgetPasswordForm = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Implement your forget password logic here
    console.log('Email:', email);

    // Clear input field
    setEmail('');
  };

  return (
    <form className="forget-password-form" onSubmit={handleSubmit}>
    <h2>Enter your email to reset the password</h2>
      <div className="form-group">
        <input
          type="email"
          id="email"
          value={email}
          placeholder='example123@gmail.com'
          onChange={handleEmailChange}
          required
        />
      </div>
      <button className="reset-button" type="submit">Reset Password</button>
    </form>
  );
};

export default ForgetPasswordForm;
