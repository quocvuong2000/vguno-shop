import React from "react";
import PropTypes from "prop-types";

import numberWithCommas from '../utils/numberWithCommas';
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  const product = props.product;
  const navigate = useNavigate();

  
  return (
    <div className="product">
      <div className="product__image">
        <img src={product.image} alt="" />
      </div>
      <div className="product__interact">
          <div className="product__interact__btn" onClick={() => navigate('/categories/' + product.productId)}>Mua ngay</div>
          <i className='bx bxs-cart-add'></i>
          <i className='bx bx-heart-circle' ></i>
      </div>
      <div className="product__info">
        <div className="product__info__title">{product.title}</div>
        <div className="product__info__price">
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
