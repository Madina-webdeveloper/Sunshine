import React from "react";
import "./index.css";
import Btn from "../../UI/Btn";
import banner from "../../assets/images/banner.png";

const index = () => {
  return (
    <>
      <section className="banner">
        <div className="container banner_wrap">
          <div className="banner_right">
            <h2 className="banner_title">
            Biz siz uchun eng yaxshi sayohatni taqdim etishga tayyormiz
            </h2>
            <p className="banner_description">
            Bizda dunyoning eng yaxshi yo'nalishlari mavjud bo'lib, ularni siz o'zingizning sayohat manzilingiz sifatida tanlashingiz mumkin
            </p>
            <Btn theme="Hoziroq bog'laning" />
          </div>
          <div className="banner_left">
            <img src={banner} alt="banner" />
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
