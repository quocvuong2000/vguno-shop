import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "../components/Button";

import numberWithCommas from "../utils/numberWithCommas";
import brandData from "../assets/fake-api/brands";
import categoryData from "../assets/fake-api/category";

import {useDispatch}from 'react-redux';
import {addItem} from '../redux/cart-item/cartItemRedux';

const ProductView = (props) => {
  const item = props.product;
  const dispatch = useDispatch();
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    setProduct(item);
  }, [item]);
const increaseQuantity = ()=> {
  setQuantity(quantity+1);
}
const decreaseQuantity = () => {
  setQuantity(quantity - 1 < 0 ? 0 : quantity-1);
}

const addCartItem = () => {
  const newItem = {
    productId: product.productId,
    title: product.title,
    price: product.price,
    brand: product.brand,
    quantity: quantity,
  };
  dispatch(addItem(newItem));
}
  return (
    <div className="product">
      <div className="product-top">
        <div className="product-top__images">
          <div className="product-top__images__main">
            <img src={product?.image} alt="" />
          </div>
          <div className="product-top__images__sub">
            <img src={product?.image} alt="" />
            <img src={product?.image} alt="" />
            <img src={product?.image} alt="" />
          </div>
        </div>
        <div className="product-top__info">
          <div className="product-top__info__title">{product?.title}</div>
          <div className="product-top__info__price">
            {product ? numberWithCommas(product.price) : ""} VND
          </div>
          <div className="product-top__info__brand">
            Thương hiệu: {product ? brandData.getDisplayById(product.brand) : ""}
          </div>
          <div className="product-top__info__category">
            Danh mục: {product ? categoryData.getDisplayById(product.category): ""}
          </div>
          <div className="product-top__info__status">
            Trạng thái: {product?.stocking ? "Còn hàng" : "Hết hàng"}
          </div>
          <div className="product-top__info__quantity">
            <i className="bx bx-minus" onClick={decreaseQuantity}></i>
            <div>{quantity}</div>
            <i className="bx bx-plus" onClick={increaseQuantity}></i>
          </div>
          <div className="product-top__info__cart">
            <Button size="sm" animate2={true} >
              mua ngay
            </Button>
            <Button size="sm" animate2={true} onClick={addCartItem}>
              thêm vào giỏ hàng
            </Button>
          </div>
        </div>
      </div>
      <div className="product-bottom">
        <div className="product-bottom__title">chi tiết sản phẩm</div>
        <div className="product-bottom__description">{product?.description}</div>
      </div>
    </div>
  );
};

ProductView.propTypes = {
  product: PropTypes.object,
};

export default ProductView;
