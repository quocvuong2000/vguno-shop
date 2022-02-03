import React from 'react';
import PropTypes from 'prop-types';

const ProductView = (props) => {
    const product = props.product;
  return <div className='product'>
      <div className="product-top">
          <div className="product-top__images">
              <img src={product.img} alt="" />
          </div>
          <div className="product-top__info">
              <div className="product-top__info__title">
                  {product.title}
              </div>
              <div className="product-top__info__price"></div>
              <div className="product-top__info__brand"></div>
              <div className="product-top__info__category"></div>
              <div className="product-top__info__status"></div>
          </div>
      </div>
      <div className="product-bottom">
          <div className="product-bottom__description">
            {product.description}
          </div>
      </div>
  </div>;
};

ProductView.propTypes = {
    product : PropTypes.object
};

export default ProductView;
