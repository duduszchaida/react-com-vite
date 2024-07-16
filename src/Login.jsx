import React from "react";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { Password } from "primereact/password";


function Login() {
  return (
    <div className="grid  ">
      <div className="hidden xl:block xl:col-7 img-login"><img className=" h-full" src="vedoble-background.png"></img></div>

      <div className="col-12 xl:col-5  py-7 px-5 xl:px-8 bg-white">
        <div className="text-center mt-6 mb-5">
        <img src="logo-vedoble.png"></img>
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
          feedback={false} tabIndex={1}
        ></Password>

        <div className=" align-items-center text-center  mb-5 gap-5">
          
          <a
            className="font-medium no-underline ml-2 text-center cursor-pointer"
            style={{ color: "var(--primary-color)" }}
          >
            Forgot password?
          </a>
        </div>
        <Button label="Sign In" className="w-full p-3 text-xl"></Button>
      </div>
    </div>
  );
}

export default Login;
