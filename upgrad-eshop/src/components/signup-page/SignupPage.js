import React from 'react';
import './SignupPage.css';
import LockIcon from '@mui/icons-material/Lock';

function SignUpPage() {
  return (
    <div className="signup-container">
      <div className="logo-container">
        <img src={LockIcon} alt="Lock Logo" className="lock-logo" />
        <h2>Sign Up</h2>
      </div>
      <div className="form-container">
        <input type="text" placeholder="First Name *" required/>
        <input type="text" placeholder="Last Name *" required/>
        <input type="email" placeholder="Email Address *" required/>
        <input type="password" placeholder="Password *" required/>
        <input type="password" placeholder="Confirm Password *" required/>
        <button>SIGN UP</button>
        <a href="/login" id='login-link'>Already have an account? Sign in</a>
      </div>
      <div className="footer-copyright">
        <p>Copyright © <a href="https://www.upgrad.com">upGrad</a> 2021.</p>
      </div>
    </div>
  );
}

export default SignUpPage;
