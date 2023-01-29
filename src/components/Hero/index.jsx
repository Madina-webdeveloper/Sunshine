import React from "react";
import "./index.css";
import HeroPhoto from "../../assets/images/hero_page.png";
import ry from "../../assets/images/right_yellow.svg";

const index = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero_wrapper">
            <div className="left_wrapper">
              <p className="left_description">
              dunyoning eng yaxshi yo'nalishlari bo'yicha eng yaxshi takliflar
              </p>

              <h1 className="left_title">Orzularingizni amalga oshiring va sayohat qiling</h1>

              <p className="left_paragraph">
              <span className="sun">Sunshine</span> bilan siz yangi sayohatlar va biz taklif qiladigan eng yaxshi sayyohlik yo'nalishlarini boshdan kechirishingiz mumkin
              </p>
              <div className="hero_btns">
                <a href="#destination" className="btn_section">
                Bizning maqsadimiz
                  <i class="fa-solid right fa-angle-right"></i>
                </a>
                <button className="right_btn">
                  <img src={ry} alt="" /> Bizning Galereyamiz
                </button>
              </div>
            </div>
            <div className="right_wrapper">
              <img src={HeroPhoto} alt="hero" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
