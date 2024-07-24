import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { Password } from "primereact/password";
import { Message } from "primereact/message";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

function ChangePassword() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      
      console.log("Senha redefinida com sucesso!");
      setError("");
    } else {
      setError("As senhas não coincidem.");
    }
  };

  return (
    <div className="flex align-items-center justify-content-center">
      <div className="surface-card pb-7 p-8 shadow-2 border-round w-full lg:w-5">
        <div className="text-center mb-5">
          <img
            src="logo-vedoble.png"
            alt="hyper"
            height={40}
            className="mb-3"
          />
          <div className="text-900 text-3xl font-medium mt-3">
            Redefinição de senha
          </div>
          <span className="text-600 font-medium line-height-3">
            Lembrou a senha?
          </span>
          <a
            className="font-medium no-underline ml-2 text-blue-500 cursor-pointer"
            onClick={handleLogin}
          >
            Faça o login
          </a>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-center text-xl text-900 font-semibold mb-2 mt-6"
            >
              Nova senha:
            </label>
            <Password
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              toggleMask
              feedback={false}
               className="w-full mb-5 "
          inputClassName="w-full p-3 md:max-w-30rem"
              required
            />
            <label
              htmlFor="confirmPassword"
              className="block text-center text-xl text-900 font-semibold mb-2 mt-6"
            >
              Confirmar Nova Senha
            </label>
            <Password
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              toggleMask
              feedback={false}
               className="w-full mb-5 "
          inputClassName="w-full p-3 md:max-w-30rem"
             
              required
            />
            {error && <Message severity="error" text={error} />}
            <div className="mt-4 flex justify-content-center">
              <Button label="Redefinir senha" type="submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
