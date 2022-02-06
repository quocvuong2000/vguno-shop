import React from "react";
import PropTypes from "prop-types";
import Button from "../components/Button";

import numberWithCommas from "../utils/numberWithCommas";
import brandData from "../assets/fake-api/brands";
import categoryData from "../assets/fake-api/category";

const ProductView = (props) => {
  const product = props.product;

  return (
    <div className="product">
      <div className="product-top">
        <div className="product-top__images">
          <div className="product-top__images__main">
            <img src={product.image} alt="" />
          </div>
          <div className="product-top__images__sub">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
        </div>
        <div className="product-top__info">
          <div className="product-top__info__title">{product.title}</div>
          <div className="product-top__info__price">
            {numberWithCommas(product.price)} VND
          </div>
          <div className="product-top__info__brand">
            Thương hiệu: {brandData.getDisplayById(product.brand)}
          </div>
          <div className="product-top__info__category">
            Danh mục: {categoryData.getDisplayById(product.category)}
          </div>
          <div className="product-top__info__status">Trạng thái: {product.stocking ? "Còn hàng" : "Hết hàng"}</div>
          <div className="product-top__info__quantity">
          <i className="bx bx-minus"></i>
          <span>0</span>
          <i className="bx bx-plus"></i>
          </div>
          <div className="product-top__info__cart">
            <Button size="sm" animate2={true}>
              mua ngay
            </Button>
            <Button size="sm" animate2={true}>
              thêm vào giỏ hàng
            </Button>
          </div>
        </div>
      </div>
      <div className="product-bottom">
        <div className="product-bottom__title">chi tiết sản phẩm</div>
        <div className="product-bottom__description">{product.description}</div>
      </div>
    </div>
  );
};

ProductView.propTypes = {
  product: PropTypes.object,
};

export default ProductView;
