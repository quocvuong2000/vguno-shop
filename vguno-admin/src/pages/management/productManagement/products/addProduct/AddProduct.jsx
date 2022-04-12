import React, { useState } from "react";
import "./add-product.scss";
import { Upload, message } from "antd";
import { LoadingOutlined, CameraOutlined } from "@ant-design/icons";

import "antd/dist/antd.css";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}
function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 2024 / 2024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}
const AddProduct = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleChange = (info) => {
    // if (info.file.status === "uploading") {
      console.log(info);
      setLoading(true);
    //   return;
    // }
    // if (info.file.status === "done") {
    // Get this url from response in real world.
    getBase64(info.file.originFileObj, (imageUrl) => {
      setImageUrl(imageUrl);
      setLoading(false);
    });
    // }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <CameraOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  // console.log(imageUrl);
  // const handleChange = ({ fileList }) => this.setState({ fileList });
  return (
    <div className="add-product">
      <form action="" className="add-product__form">
        <div className="add-product__form__input">
          <div className="add-product__form__content">
            <div className="add-product__form__content__item">
              <label htmlFor="title">Tên sản phẩm</label>
              <input type="text" id="title" />
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
            <label htmlFor="img">
              <i class="bx bx-upload"></i>
            </label>
            <input type="file" id="img" />
            <img
              src={
                imageUrl
                  ? imageUrl
                  : "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              }
              alt=""
            />

            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {uploadButton}
            </Upload>
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
  );
};

export default AddProduct;
