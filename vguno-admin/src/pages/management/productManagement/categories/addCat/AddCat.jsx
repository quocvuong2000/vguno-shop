import React, { createRef, useRef } from "react";
import "./add-cat.scss";

const iconList = [
  "bx bx-headphone",
  "bx bxs-keyboard",
  "bx bx-laptop",
  "bx bxs-mouse",
  "bx bx-desktop",
  "bx bxs-memory-card",
  "bx bxs-hdd",
  "bx bx-chip",
  "bx bx-printer",
  "bx bxs-joystick",
  "bx bx-mobile",
];

const AddCat = () => {
  const iconListRefs = useRef([]);
  iconListRefs.current = iconList.map(
    (_, i) => iconListRefs.current[i] ?? createRef()
  );

  const iconHandler = (ref) => {
    iconListRefs.current.map((icon) => {
      if (icon.current === ref.current) {
        console.log(ref.current.className);
        return ref.current.classList.add("active");
      } else {
        return icon.current.classList.remove("active");
      }
    });
  };
  return (
    <div className="add-cat">
      <form action="" className="add-cat__form">
        <div className="add-cat__form__item">
          <label htmlFor="title">Tên danh mục</label>
          <input type="text" id="title" />
        </div>
        <div className="add-cat__form__icon">
          <div className="add-cat__form__icon__title">
            Chọn icon hiển thị trên trang chủ
          </div>
          <div className="add-cat__form__icon__list">
            {iconList.map((icon, index) => {
              return (
                <i
                  className={icon}
                  key={index}
                  ref={iconListRefs.current[index]}
                  onClick={() => iconHandler(iconListRefs.current[index])}
                ></i>
              );
            })}
          </div>
        </div>
        <div className="add-cat__btn">
          <button type="submit">
            <i className="bx bx-plus-circle"></i>
            Thêm
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCat;
