import React, { useState } from "react";

import FormInput from "../components/FormInput";

import Button from "../components/Button";
import { Link } from "react-router-dom";
import Helmet from '../components/Helmet';


const Login = () => {
  const [values, setValues] = useState({
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
  const inputHandler = (e) => {
    setValues({...values, [e.target.name] : e.target.value})
  }
  const onHandleSubmit = (e)=> {
    e.preventDefault();
  }
  console.log(values);
  return (
    <Helmet name="Đăng nhập">
      <div className="login">
        <div className="login__container">
          <div className="login__title">Đăng nhập</div>
          <div className="login__content">
            <form onSubmit={onHandleSubmit}>
              {inputs.map((input, index) => {
                return <FormInput key={index} {...input} onChange={inputHandler} value={values[input.name]}></FormInput>;
              })}
              <Button size="sm" animate2={true}>
                Đăng nhập
              </Button>
            </form>
            <div className="login__redirect">
            <Link to={"/register"}>
              <span>Chưa có tài khoản? Đăng kí</span>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Login;
