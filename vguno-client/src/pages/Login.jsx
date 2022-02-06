import React, { useState } from "react";

import FormInput from "../components/FormInput";

import Button from '../components/Button';

const Login = () => {
  const [values, setValue] = useState({
    username: "",
    password: "",
  });
  const inputs = [
    {
      name: "username",
      type: "text",
      placeholder: "Tài khoản",
      errorMessage: "",
      label: "Tài khoản",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Mật khẩu",
      errorMessage: "",
      label: "Mật khẩu",
    },
  ];
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__title">Đăng nhập</div>
        <div className="login__content">
          <form>
            {inputs.map((input, index) => {
              return <FormInput key={index} {...input}></FormInput>;
            })}
            <Button size="sm" animate2={true}>Đăng nhập</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
