import React, { useState } from "react";
import "../css/Login.css";

export default function Login() {
  const [type, setType] = useState("signIn");
  const [signInState, setSignInState] = useState({
    email: "",
    password: "",
  });
  const [signUpState, setSignUpState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
      return;
    }
  };

  const handleSignInChange = (evt) => {
    const value = evt.target.value;
    setSignInState({
      ...signInState,
      [evt.target.name]: value,
    });
  };

  const handleSignUpChange = (evt) => {
    const value = evt.target.value;
    setSignUpState({
      ...signUpState,
      [evt.target.name]: value,
    });
  };

  const handleSignInSubmit = (evt) => {
    evt.preventDefault();
    const { email, password } = signInState;
    alert(`You are login with email: ${email} and password: ${password}`);
    setSignInState({ email: "", password: "" });
  };

  const handleSignUpSubmit = (evt) => {
    evt.preventDefault();
    const { name, email, password } = signUpState;
    alert(
      `You are sign up with name: ${name} email: ${email} and password: ${password}`
    );
    setSignUpState({ name: "", email: "", password: "" });
  };

  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");

  return (
    <div className="App">
      <h2>Sign in/up Form</h2>
      <div className={containerClass} id="container">
        {/* SignUpForm */}
        <div className="form-container sign-up-container">
          <form onSubmit={handleSignUpSubmit}>
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g" />
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
            <span>or use your email for registration</span>
            <input
              type="text"
              name="name"
              value={signUpState.name}
              onChange={handleSignUpChange}
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={signUpState.email}
              onChange={handleSignUpChange}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              value={signUpState.password}
              onChange={handleSignUpChange}
              placeholder="Password"
            />
            <button>Sign Up</button>
          </form>
        </div>

        {/* SignInForm */}
        <div className="form-container sign-in-container">
          <form onSubmit={handleSignInSubmit}>
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g" />
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
            <span>or use your account</span>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={signInState.email}
              onChange={handleSignInChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={signInState.password}
              onChange={handleSignInChange}
            />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost "
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}