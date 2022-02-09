import React, { useState } from "react";

import FormInput from "../components/FormInput";

import Button from "../components/Button";
import { Link } from "react-router-dom";
import Helmet from '../components/Helmet';


const Register = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const inputs = [
    {
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username giới hạn từ 3-16 kí tự và không bao gồm kí tự đặc biệt",
      label: "Tài khoản",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password giới hạn từ 8-20 kí tự và có ít nhất một kí tự chữ, một kí tự số",
      label: "Mật khẩu",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password không trùng",
      label: "Xác nhận mật khẩu",
      pattern: values.password,
      required: true,
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Email không hợp lệ",
      label: "Email",
      pattern:
      "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+[a-zA-Z0-9-.]+$",
      required: true,
    },
  ];
  const onChangeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Helmet name="Đăng kí">
      <div className="register">
        <div className="register__container">
          <div className="register__title">Đăng kí</div>
          <div className="register__content">
            <form onSubmit={onHandleSubmit}>
              {inputs.map((input, index) => {
                return (
                  <FormInput
                    key={index}
                    {...input}
                    value={values[input.name]}
                    onChange={onChangeHandler}
                  ></FormInput>
                );
              })}
              <Button size="sm" animate2={true}>
                đăng kí
              </Button>
            </form>
            <div className="register__redirect">
            <Link to={"/login"}>
              <span>Đã có tài khoản? Đăng nhập</span>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Register;
