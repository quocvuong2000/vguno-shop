import React from "react";
import "./add-brand.scss";
const AddBrand = () => {
  return (
    <form action="" className="add-brand">
      <div className="add-brand__item">
        <label htmlFor="title">Tên hãng</label>
        <input type="text" id="title" />
      </div>
      <div className="add-brand__btn">
        <button type="submit">
          <i className="bx bx-plus-circle"></i>
          Thêm
        </button>
      </div>
    </form>
  );
};

export default AddBrand;
