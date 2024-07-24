import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

function ForgotPassword() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleChangePassword = () => {
    navigate("/change-password");
  };
  return (
    <div className="flex align-items-center justify-content-center">
      <div className="surface-card pb-7 p-8 shadow-2 border-round w-full lg:w-5">
        <div className="text-center mb-5">
          <img src="logo-vedoble.png" alt="hyper" height={40} className="mb-3" />
          <div className="text-900 text-3xl font-medium mt-3">Recuperação de senha</div>
          <span className="text-600 font-medium line-height-3">Lembrou a senha?</span>
          <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer" onClick={handleLogin}>Faça o login</a>
        </div>

        <div >
          <label htmlFor="email" className="block text-center text-xl text-900 font-semibold mb-2 mt-6">Digite seu email de recuperação:</label>
          <InputText id="email" type="text" placeholder="Email address" className="w-full mb-3" />

          <div className="mt-4 flex justify-content-center">
            <Button label="Enviar email" icon="pi pi-user" onClick={handleChangePassword} className=""/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
