import React from 'react'
import './add-product.scss';
const AddProduct = () => {
  return (
    <div className='add-product'>
      <form action="" className="add-product__form">
      <div className="add-product__form__input">
      <div className="add-product__form__content">
        <div className="add-product__form__content__item">
          <label htmlFor="title">Tên sản phẩm</label>
          <input type="text" id='title'/>
        </div>
        <div className="add-product__form__content__item">
          <label htmlFor="desc">Nội dung bài sản phẩm</label>
          <textarea name="" id="desc" cols="30" rows="10"></textarea>
        </div>
        <div className="add-product__form__content__item">
          <label htmlFor="cat">Danh mục sản phẩm</label>
          <select name="" id="cat">
            <option value="test">test</option>
          </select>
        </div>
        <div className="add-product__form__content__item">
          <label htmlFor="brand">Hãng sản xuất</label>
          <select name="" id="brand">
            <option value="test">test</option>
          </select>
        </div>
        <div className="add-product__form__content__item">
          <label htmlFor="quantity">Số lượng</label>
          <input type="number" name="" id="quantity" />
        </div>
        </div>
        <div className="add-product__form__image">
          <label htmlFor="img"><i class='bx bx-upload' ></i></label>
          <input type="file" id='img'/>
          <img src="https://cdn.pixabay.com/photo/2017/05/09/13/33/laptop-2298286_960_720.png" alt="" />
        </div>
      </div>
        <div className="add-product__btn">
          <button type="submit">
            <i className="bx bx-plus-circle"></i>
            Thêm
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddProduct;