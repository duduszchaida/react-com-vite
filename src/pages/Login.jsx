import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { Messages } from "primereact/messages";

function Login() {
  const navigate = useNavigate();
  const messages = useRef(null);

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();
  
    try {
      console.log("Attempting login with", { email, password });
      const response = await axios.post('http://localhost:8080/api/auth/login', { email, password });


  
      console.log("Login response:", response);
      if (response.status === 200) {
        window.location.href = '/';
      }
    } catch (error) {
      console.error("Login error:", error);
      if (error.response && error.response.status === 401) {
        setError('Invalid email or password');
        messages.current.show({ severity: 'error', summary: 'Error', detail: 'Invalid email or password' });
      } else {
        setError('An error occurred. Please try again later.');
        messages.current.show({ severity: 'error', summary: 'Error', detail: 'An error occurred. Please try again later.' });
      }
    }
  };

  return (
    <div className="grid">
      <div className="hidden xl:block xl:col-7 img-login">
        <img className="h-full" src="vedoble-background.png" alt="Background" />
      </div>
     
      <div className="col-12 xl:col-5 py-7 px-5 xl:px-8 bg-white">
        <form onSubmit={handleLogin}>
          <div className="text-center mt-6 mb-5">
            <img src="logo-vedoble.png" alt="Logo" />
          </div>
          <label
            htmlFor="email1"
            className="block text-900 text-xl font-medium mb-2"
          >
            Email
          </label>
          <InputText
            id="email1"
            type="text"
            placeholder="Email address"
            className="w-full md:max-w-30rem mb-5"
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: "1rem" }}
          />

          <label
            htmlFor="password1"
            className="block text-900 font-medium text-xl mb-2"
          >
            Password
          </label>
          <Password
            inputId="password1"
            placeholder="Password"
            toggleMask
            className="w-full mb-5"
            inputClassName="w-full p-3 md:max-w-30rem"
            feedback={false}
            tabIndex={1}
            onChange={(e) => setPassword(e.target.value)}
          ></Password>

          <div className="align-items-center text-center mb-5 gap-5">
            <a
              className="font-medium no-underline ml-2 text-center cursor-pointer"
              style={{ color: "var(--primary-color)" }}
              onClick={handleForgotPassword}
            >
              Forgot password?
            </a>
          </div>
          <Button label="Sign In" className="w-full p-3 text-xl" type="submit"></Button>
        </form>
        <Messages ref={messages} />
      </div>
    </div>
  );
}

export default Login;
