import React from "react";
import PropTypes from "prop-types";

import numberWithCommas from "../utils/numberWithCommas";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addItem } from "../redux/cart-item/cartItemRedux";

const ProductCard = (props) => {
  const product = props.product;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onHandleAddCartItem = () => {
    const newItem = {
      productId: product.productId,
      title: product.title,
      price: product.price,
      brand: product.brand,
      quantity: 1,
    };
    dispatch(addItem(newItem));
  };
  return (
    <div className="product-card">
      <div className="product-card__image">
        <img src={product.image} alt="" />
      </div>
      <div className="product-card__interact">
        <div
          className="product-card__interact__btn"
          onClick={() => navigate("/categories/" + product.productId)}
        >
          Mua ngay
        </div>
        <i className="bx bxs-cart-add" onClick={onHandleAddCartItem}></i>
        <i className="bx bx-heart-circle"></i>
      </div>
      <div className="product-card__info">
        <div className="product-card__info__title">{product.title}</div>
        <div className="product-card__info__price">
          {numberWithCommas(product.price)} VND
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
