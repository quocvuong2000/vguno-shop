import React from "react";

import img1 from "../assets/images/blog/2.png";
import img2 from "../assets/images/blog/JBL_Quantum400_Lifestyle1.png";
import Button from "./Button";

const Blog = () => {
  return (
    <div className="blog">
      <div className="blog__item">
        <div className="blog__item__image">
          <img src={img1} alt="" />
        </div>
        <div className="blog__item__content">
          <div className="blog__item__content__title">
            Lorem ipsum dolor sit amet.
          </div>
          <div className="blog__item__content__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
            architecto ducimus dolorem nisi odit officia. A laborum pariatur
            aperiam corporis obcaecati quod architecto, quo et aut ratione rem
            fugiat cupiditate, ipsum iste dolorum accusantium harum.
          </div>
          <Button size="sm" animate={true} icon="bx-info-circle">
            Chi tiết
          </Button>
        </div>
      </div>
      <div className="blog__item">
        <div className="blog__item__content">
          <div className="blog__item__content__title">
            Lorem ipsum dolor sit amet.
          </div>
          <div className="blog__item__content__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
            architecto ducimus dolorem nisi odit officia. A laborum pariatur
            aperiam corporis obcaecati quod architecto, quo et aut ratione rem
            fugiat cupiditate, ipsum iste dolorum accusantium harum.
          </div>
          <Button size="sm" animate={true} icon="bx-info-circle">
            Chi tiết
          </Button>
        </div>
        <div className="blog__item__image">
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
