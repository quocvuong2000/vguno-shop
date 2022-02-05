import React from "react";
import PropTypes from "prop-types";

import brandData from "../assets/fake-api/brands";
import numberWithCommas from "../utils/numberWithCommas";

const CartItem = (props) => {
  const product = props.item;

  return (
    <div className="cart-item">
      <div className="cart-item__image">
        <img src={product.image} alt="" />
      </div>
      <div className="cart-item__info">
        <div className="cart-item__info__title">{product.title}</div>
        <div className="cart-item__info__price">
          Đơn giá: {numberWithCommas(product.price)} VND
        </div>
        <div className="cart-item__info__brand">
          Thương hiệu: {brandData.getDisplayById(product.brand)}
        </div>

        <div className="cart-item__info__id">Mã sp: {product.productId}</div>
      </div>
      <div className="cart-item__total">
        <div className="cart-item__total__quantity">
          <i className="bx bx-minus"></i>
          <span>0</span>
          <i className="bx bx-plus"></i>
        </div>
        <div className="cart-item__total__total">1</div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object,
};

export default CartItem;
