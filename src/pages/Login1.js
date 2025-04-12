import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import { useNavigate } from 'react-router-dom'; 

import '../css/Login.css';

//dummy login page for github

const Login = () => {
  const [isRegisterActive, setIsRegisterActive] = useState(false);
  const navigate = useNavigate(); 

  
  const isValidEmail = (email) => {
    const atIndex = email.indexOf('@');
    if (atIndex === -1) return false;

    const localPart = email.slice(0, atIndex);
    const domainPart = email.slice(atIndex + 1);

    const hasLetter = /[a-zA-Z]/.test(localPart);
    const isNotFullyNumeric = /\D/.test(localPart);
    if (!hasLetter || !isNotFullyNumeric) return false;

    const domainRegex = /^(gmail|yahoo|hotmail|outlook|icloud|protonmail)\.(com|net|org|co)$/;
    return domainRegex.test(domainPart);
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return passwordRegex.test(password);
  };

  const toggleForm = () => {
    setIsRegisterActive(!isRegisterActive);
  };

  const handleSignIn = () => {  
    navigate('/home'); 
  };

  const handleSignUp = () => {
    
    navigate('/home'); 
  };

  return (
    <div className='login'>
<div className={`container ${isRegisterActive ? 'active' : ''}`} id="container">
<div className="form-container sign-up">
          <form>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href="#" className="icons"><i className='bx bxl-google'></i></a>
              <a href="#" className="icons"><i className='bx bxl-facebook'></i></a>
              <a href="#" className="icons"><i className='bx bxl-github'></i></a>
              <a href="#" className="icons"><i className='bx bxl-linkedin'></i></a>
            </div>
            <span>Register with E-mail</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Enter E-mail" />
            <input type="password" placeholder="Enter Password" />
            <button type="button" onClick={handleSignUp}>Sign Up</button> 
          </form>
        </div>

        <div className="form-container sign-in">
          <form>
            <h1>Sign In</h1>
            <div className="social-icons">
              <a href="#" className="icons"><i className='bx bxl-google'></i></a>
              <a href="#" className="icons"><i className='bx bxl-facebook'></i></a>
              <a href="#" className="icons"><i className='bx bxl-github'></i></a>
              <a href="#" className="icons"><i className='bx bxl-linkedin'></i></a>
            </div>
            <span>Enter any Email & Password</span>
            <input type="email" placeholder="Enter E-mail" />
            <input type="password" placeholder="Enter Password" />
            <a href="#">Forget Password?</a>
            <button type="button" onClick={handleSignIn}>Sign In</button> {/* Updated */}
          </form>
        </div>

        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome To <br />Readify</h1>
              <p>Enter any email & Password</p>
              <button className="hidden" onClick={toggleForm} id="login">Sign In</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hi Readers!</h1>
              <p>Enter any email & password to login.</p>
              <button className="hidden" onClick={toggleForm} id="register">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;