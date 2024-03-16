import React from "react";
import './LoginPage.css';
import LockIcon from '@mui/icons-material/Lock';

function LoginPage() {
    return(
        <div className="login-container">

            <div className="logo-container">
                <LockIcon className="lock-logo"/>
                <h2>Sign In</h2>
            </div>

            <div className="form-container">
                <input type="email" placeholder="Email Address *" required/>
                <input type="password" placeholder="Password *" required/>
                <button id="signin-button">SIGN IN</button>
                <a href="/signup" id='signup-link'>Don't have an account? Sign Up</a>
            </div>

            <div className="footer-copyright">
                <p>Copyright © <a href="https://www.upgrad.com">upGrad</a> 2021.</p>
            </div>

        </div>
    )
}

export default LoginPage;