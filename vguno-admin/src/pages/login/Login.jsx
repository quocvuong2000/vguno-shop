import React from 'react'
import './login.scss';
import logo from '../../assets/images/prologo1.png';


const Login = () => {
  return (
    <div className='login'>
        <div className="login__title">
            vguno management
        </div>
        <div className="login__detail">
            <div className="login__detail__logo">
                <img src={logo} alt="" />
            </div>
            <form action="" className="login__detail__form">
                <div className="login__detail__form__item">
                    <input type="text"  placeholder='Username'/>
                </div>
                <div className="login__detail__form__item">
                    <input type="text" placeholder='Password'/>
                    <i class='bx bx-show'></i>
                </div>
                <button className="login__detail__form__btn" type='submit'>
                    Login
                </button>
            </form>
            <div className="login__detail__forgot">
                Quên mật khẩu
            </div>
        </div>
    </div>
  )
}

export default Login;