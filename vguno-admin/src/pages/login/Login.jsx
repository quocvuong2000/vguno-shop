import React from "react";
import "./login.scss";
import dragon from "../../assets/images/dragon.png";

const Login = () => {
  return (
    <div className="login">
      

      <div className="login__detail">
      <div className="glass" style={{ "---i": "1s" }}></div>
      <div className="glass" style={{ "---i": "2s" }}></div>
      <div className="glass" style={{ "---i": "3s" }}></div>
      <div className="glass" style={{ "---i": "4s" }}></div>
      <div className="glass" style={{ "---i": "5s" }}></div>
        <div className="login__detail__logo">
          <img src={dragon} alt="" />
        </div>
        <div className="login__title">management</div>
        <form action="" className="login__detail__form">
          <div className="login__detail__form__item">
            <input type="text" placeholder="Username" />
          </div>
          <div className="login__detail__form__item">
            <input type="text" placeholder="Password" />
            <i className="bx bx-show"></i>
          </div>
          <button className="login__detail__form__btn" type="submit">
            Login
          </button>
        </form>
        <div className="login__detail__forgot">Quên mật khẩu</div>
      </div>
    </div>
  );
};

export default Login;
