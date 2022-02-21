import React from "react";
import "../widget-bottom.scss";
import img from "../../../assets/images/product.jpg";

const WidgetBottomRight = () => {
  return (
    <div className="widget-bottom__left">
      <div className="widget-bottom__title">Sản phẩm mới</div>
      <div className="row widget-bottom__item widget-bottom__item__main">
        <div className="col-4 widget-bottom__item__title">Mã sản phẩm</div>
        <div className="col-3 widget-bottom__item__image">Hình ảnh</div>
        <div className="col-2 widget-bottom__item__quantity">SL</div>
        <div className="col-3 widget-bottom__item__btn">Chi tiết</div>
      </div>
      {/* SHOW ITEM */}
      <div className="row widget-bottom__item">
        <div className="col-4 widget-bottom__item__title">
          23123123122131546
        </div>
        <div className="col-3 widget-bottom__item__image">
          <img src={img} alt="" />
        </div>
        <div className="col-2 widget-bottom__item__quantity">3</div>
        <div className="col-3 widget-bottom__item__btn">
          <button>
            <i className="bx bx-show"></i>
            Show
          </button>
        </div>
      </div>
      <div className="row widget-bottom__item">
        <div className="col-4 widget-bottom__item__title">
          23123123122131546
        </div>
        <div className="col-3 widget-bottom__item__image">
          <img src={img} alt="" />
        </div>
        <div className="col-2 widget-bottom__item__quantity">3</div>
        <div className="col-3 widget-bottom__item__btn">
          <button>
            <i className="bx bx-show"></i>
            Show
          </button>
        </div>
      </div>
      <div className="row widget-bottom__item">
        <div className="col-4 widget-bottom__item__title">
          23123123122131546
        </div>
        <div className="col-3 widget-bottom__item__image">
          <img src={img} alt="" />
        </div>
        <div className="col-2 widget-bottom__item__quantity">3</div>
        <div className="col-3 widget-bottom__item__btn">
          <button>
            <i className="bx bx-show"></i>
            Show
          </button>
        </div>
      </div>
      {/* END SHOW ITEM */}
    </div>
  );
};

export default WidgetBottomRight;
