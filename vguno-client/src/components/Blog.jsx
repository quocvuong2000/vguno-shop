import React from "react";

import img1 from "../assets/images/blog/2.png";
import img2 from "../assets/images/blog/JBL_Quantum400_Lifestyle1.png";
import Button from "./Button";

const Blog = () => {
  return (
    <div className="blog">
      <div className="blog__item">
        <div className="blog__item__image">
          <img src={img2} alt="" />
        </div>
        <div className="blog__item__content">
          <div className="blog__item__content__title">
            công nghệ định vị âm thanh không gian chuẩn xác.
          </div>
          <div className="blog__item__content__description">
            Một chiếc tai nghe game thủ mang đến lợi thế âm thanh đa hướng chuẩn
            mực và chính xác đỉnh cao nhất. Công nghệ JBL QuantumSURROUND™ đưa
            bạn vào trung tâm của trải nghiệm, để bạn vươn tầm chiến thắng. Từ
            tiếng bước chân mong manh đến những pha cháy nổ khốc liệt, đưa mọi
            cảnh game hoành tráng hơn và mỗi game thủ quyền năng cạnh tranh hơn.
            Âm thanh độc quyền của chúng tôi được kiến tạo từ driver lớn tới
            50mm cùng công nghệ JBL QuantumSOUND cho không gian âm thanh đa
            hướng chân thực và mang tới lợi thế âm thanh thực thụ trong mỗi trận
            chiến.
          </div>
          <Button size="sm" animate={true} icon="bx-headphone">
            Chi tiết
          </Button>
        </div>
      </div>
      <div className="blog__item blog__item__main">
        <div className="blog__item__content">
          <div className="blog__item__content__title">
            Thiết kế tối ưu trải nghiệm chơi game.
          </div>
          <div className="blog__item__content__description">
            Hiện nay, laptop gaming càng ngày càng đa dạng mẫu mã và chất lượng
            tốt hơn. Thay vì chỉ đơn thuần là một sản phẩm phục vụ cho nhu cầu
            chơi game như trước đây thì bây giờ, laptop gaming đã có những sự
            cải tiến hấp dẫn, thiết kế đẹp mắt hơn và đặc biệt giá cũng đã tốt
            hơn rất nhiều. Một cỗ máy chiến game mang dáng vẻ của một chiếc
            laptop ultrabook là một điều mà bấy lâu nay những người yêu công
            nghệ luôn nghĩ rằng khó có thể làm được. Nếu như bạn là người đam mê
            với những trận game kịch tính hay thích hòa mình vào các tựa game
            nhập vai, mà lại thích chơi mọi lúc mọi nơi với bạn bè, thường xuyên
            phải di chuyển. Thì chắc hẳn bạn phải cần một chiếc laptop như vậy.
          </div>
          <Button size="sm" animate={true} icon="bx-laptop">
            Chi tiết
          </Button>
        </div>
        <div className="blog__item__image">
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
