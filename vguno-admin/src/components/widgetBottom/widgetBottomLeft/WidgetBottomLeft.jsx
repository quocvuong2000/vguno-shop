import React from "react";
import "../widget-bottom.scss";

const WidgetBottomLeft = () => {
  return (
    <div className="widget-bottom__left">
      <div className="widget-bottom__title">Đơn hàng mới nhất</div>
      <div className="row widget-bottom__item widget-bottom__item__main">
        <div className="col-3 widget-bottom__item__title">Mã đơn hàng</div>
        <div className="col-3 widget-bottom__item__username">
          Tên khách hàng
        </div>
        <div className="col-2 widget-bottom__item__quantity">Tổng SL</div>
        <div className="col-2 widget-bottom__item__price">Tổng giá</div>
        <div className="col-2 widget-bottom__item__btn">Chi tiết</div>
      </div>

      {/* SHOW ITEM */}
      <div className="row widget-bottom__item">
        <div className="col-3 widget-bottom__item__title">
          23123123122131546
        </div>
        <div className="col-3 widget-bottom__item__username">
          Nguyen Quoc Vuong
        </div>
        <div className="col-2 widget-bottom__item__quantity">7</div>
        <div className="col-2 widget-bottom__item__price">70000</div>
        <div className="col-2 widget-bottom__item__btn">
          <button>
            <i className="bx bx-show"></i>
            Show
          </button>
        </div>
      </div>
      <div className="row widget-bottom__item">
        <div className="col-3 widget-bottom__item__title">
          23123123122131546
        </div>
        <div className="col-3 widget-bottom__item__username">
          Nguyen Quoc Vuong
        </div>
        <div className="col-2 widget-bottom__item__quantity">7</div>
        <div className="col-2 widget-bottom__item__price">70000</div>
        <div className="col-2 widget-bottom__item__btn">
          <button>
            <i className="bx bx-show"></i>
            Show
          </button>
        </div>
      </div>
      <div className="row widget-bottom__item">
        <div className="col-3 widget-bottom__item__title">
          23123123122131546
        </div>
        <div className="col-3 widget-bottom__item__username">
          Nguyen Quoc Vuong
        </div>
        <div className="col-2 widget-bottom__item__quantity">7</div>
        <div className="col-2 widget-bottom__item__price">70000</div>
        <div className="col-2 widget-bottom__item__btn">
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

export default WidgetBottomLeft;
