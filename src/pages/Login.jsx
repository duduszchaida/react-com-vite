import React from "react";
import { useNavigate } from "react-router-dom";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";

function Login() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/");
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (event) => {
      event.preventDefault();

      try {
          const response = await axios.post('/api/auth/login', {
              username,
              password
          });

          if (response.status === 200) {
         
              window.location.href = '/home';
          }
      } catch (error) {
          setError('Invalid username or password');
      }
  };
  return (
    <div className="grid">
      <div className="hidden xl:block xl:col-7 img-login">
        <img className="h-full" src="vedoble-background.png" alt="Background" />
      </div>
      <form onSubmit={handleLogin}>
      <div className="col-12 xl:col-5 py-7 px-5 xl:px-8 bg-white">
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
          onChange={(e) => setUsername(e.target.value)}
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
      </div>
      </form>
    </div>
  );
}

export default Login;

