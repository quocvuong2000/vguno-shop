import React from "react";

import productData from "../assets/fake-api/products";

import Button from "../components/Button";
import CartItem from "../components/CartItem";

const Cart = () => {
  const test = productData.getProductById(6);
  const test1 = productData.getProductById(2);
  const test2 = productData.getProductById(5);

  return (
    <div className="cart">
      <div className="cart__item">
        <CartItem item={test}></CartItem>
        <CartItem item={test1}></CartItem>
        <CartItem item={test2}></CartItem>
      </div>
      <div className="cart__info">
        <div className="cart__info__content">
          <div className="cart__info__content__title">tổng kết</div>
          <div className="cart__info__content__item">
            <div className="cart__info__content__item__title">Tiền ship</div>
            <div className="cart__info__content__item__price">0</div>
          </div>
          <div className="cart__info__content__item">
            <div className="cart__info__content__item__title">
              Tổng sản phẩm
            </div>
            <div className="cart__info__content__item__price">0</div>
          </div>
          <div className="cart__info__content__item">
            <div className="cart__info__content__item__title">
              Tổng giá sản phẩm
            </div>
            <div className="cart__info__content__item__price">0</div>
          </div>
          <div className="cart__info__content__item cart__info__content__item__main">
            <div className="cart__info__content__item__title">Tổng</div>
            <div className="cart__info__content__item__price">0</div>
          </div>
        </div>
        <div className="cart__info__btn cart__info__btn__payment">
          <Button size="stable" animate3={true}>Tiếp tục thanh toán</Button>
        </div>
        <div className="cart__info__btn cart__info__btn__cart">
          <Button size="stable" animate3={true}>tiếp tục mua hàng</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
