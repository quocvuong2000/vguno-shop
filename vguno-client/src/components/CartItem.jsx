import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import brandData from "../assets/fake-api/brands";
import numberWithCommas from "../utils/numberWithCommas";
import productData from "../assets/fake-api/products";

const CartItem = (props) => {
  const itemCart = props.item;
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    setProduct(productData.getProductById(itemCart.productId));
    setQuantity(itemCart.quantity);
  }, [itemCart]);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    setQuantity(quantity - 1 < 0 ? 0 : quantity - 1);
  };
  return (
    <div className="cart-item">
      <div className="cart-item__image">
        <img src={product.image} alt="" />
      </div>
      <div className="cart-item__info">
        <div className="cart-item__info__title">{product.title}</div>
        <div className="cart-item__info__price">
          Đơn giá: {numberWithCommas(itemCart.price)} VND
        </div>
        <div className="cart-item__info__brand">
          Thương hiệu: {brandData.getDisplayById(itemCart.brand)}
        </div>

        <div className="cart-item__info__id">Mã sp: {itemCart.productId}</div>
      </div>
      <div className="cart-item__total">
        <div className="cart-item__total__quantity">
          <i className="bx bx-minus" onClick={decreaseQuantity}></i>
          <div>{quantity}</div>
          <i className="bx bx-plus" onClick={increaseQuantity}></i>
        </div>
        <div className="cart-item__total__total">
          Tổng : {numberWithCommas(itemCart.quantity * itemCart.price)} VND
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object,
};

export default CartItem;
