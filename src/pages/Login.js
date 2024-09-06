import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import { useNavigate } from 'react-router-dom'; 

import '../css/Login.css';

const Login = () => {
  const [isRegisterActive, setIsRegisterActive] = useState(false);
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  
  const navigate = useNavigate(); 

  const toggleForm = () => {
    setIsRegisterActive(!isRegisterActive);
  };


  const getUsers = () => {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  };

  
  const saveUsers = (users) => {
    localStorage.setItem('users', JSON.stringify(users));
  };

  
  const handleSignUp = () => {
    if (signUpEmail && signUpPassword) {
      let users = getUsers();
      
      
      const userExists = users.some(user => user.email === signUpEmail);
      
      if (userExists) {
        alert('Email is already registered. Please use a different email or log in.');
      } else {
        users.push({ email: signUpEmail, password: signUpPassword });
        saveUsers(users);
        alert('Registration successful! You can now log in.');
        toggleForm(); 
      }
    } else {
      alert('Please fill in both email and password fields.');
    }
  };

  
  const handleSignIn = () => {
    const users = getUsers();
    const user = users.find(user => user.email === signInEmail && user.password === signInPassword);
    
    if (user) {
      alert('Login successful!');
      navigate('/home'); 
    } else {
      alert('Incorrect email or password. Please try again.');
    }
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
            <input 
              type="email" 
              placeholder="Enter E-mail" 
              value={signUpEmail} 
              onChange={(e) => setSignUpEmail(e.target.value)} 
            />
            <input 
              type="password" 
              placeholder="Enter Password" 
              value={signUpPassword} 
              onChange={(e) => setSignUpPassword(e.target.value)} 
            />
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
            <span>Login With Email & Password</span>
            <input 
              type="email" 
              placeholder="Enter E-mail" 
              value={signInEmail} 
              onChange={(e) => setSignInEmail(e.target.value)} 
            />
            <input 
              type="password" 
              placeholder="Enter Password" 
              value={signInPassword} 
              onChange={(e) => setSignInPassword(e.target.value)} 
            />
            <a href="#">Forget Password?</a>
            <button type="button" onClick={handleSignIn}>Sign In</button>
          </form>
        </div>

        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome To <br />Readify</h1>
              <p>Sign in With ID & Password</p>
              <button className="hidden" onClick={toggleForm} id="login">Sign In</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hi Readers!</h1>
              <p>Join Readify and experience seamless reading.</p>
              <button className="hidden" onClick={toggleForm} id="register">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
