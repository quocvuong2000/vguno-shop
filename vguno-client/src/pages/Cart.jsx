import React,{useState, useEffect} from "react";

import Button from "../components/Button";
import CartItem from "../components/CartItem";
import Helmet from '../components/Helmet';

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import numberWithCommas from "../utils/numberWithCommas";

const Cart = () => {
  const cartItem = useSelector((state) => state.cartItem.value);
  const [products, setProducts] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [totalProduct, setTotalProduct] = useState();

  useEffect(()=> {
    setProducts(cartItem);
    setTotalPrice(cartItem.reduce((total,item)=> total += (item.price * item.quantity),0));
    setTotalProduct(cartItem.reduce((total,item)=> total +=  item.quantity,0));
  },[cartItem])

  return (
    <Helmet name="Giỏ hàng">
      <div className="cart">
        <div className="cart__item">
          {products?.map((item, index) => {
            return <CartItem item={item} key={index}></CartItem>;
          })}
        </div>
        <div className="cart__info">
          <div className="cart__info__content">
            <div className="cart__info__content__title">tổng kết</div>
            <div className="cart__info__content__item">
              <div className="cart__info__content__item__title">Tiền ship</div>
              <div className="cart__info__content__item__price">0,000 VND</div>
            </div>
            <div className="cart__info__content__item">
              <div className="cart__info__content__item__title">
                Tổng sản phẩm
              </div>
              <div className="cart__info__content__item__price">{totalProduct?totalProduct:""}</div>
            </div>
            <div className="cart__info__content__item">
              <div className="cart__info__content__item__title">
                Thanh toán
              </div>
              <div className="cart__info__content__item__price">{totalPrice? numberWithCommas(totalPrice) : ""} VND</div>
            </div>
            <div className="cart__info__content__item cart__info__content__item__main">
              <div className="cart__info__content__item__title">Tổng</div>
              <div className="cart__info__content__item__price">{totalPrice? numberWithCommas(totalPrice) : ""} VND</div>
            </div>
          </div>
          <div className="cart__info__btn cart__info__btn__payment">
            <Button size="stable" animate3={true}>
              <Link to={"/payment"}>Tiếp tục thanh toán</Link>
            </Button>
          </div>
          <div className="cart__info__btn cart__info__btn__cart">
            <Button size="stable" animate3={true}>
              <Link to={"/categories"}>tiếp tục mua hàng</Link>
            </Button>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
