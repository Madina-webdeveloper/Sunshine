import React from "react";
import "./index.css";
import Card from "../../UI/Card";
import right from "../../assets/images/right_destination.svg";
import left from "../../assets/images/left.svg";
import cappadocia from "../../assets/images/cappadocia.png";
import sossus from "../../assets/images/sossus.png";
import albuq from "../../assets/images/albuq.png";

const index = () => {
  return (
    <>
      <section id="destination">
        <div className="container destination">
          <div className="destination_left">
            <h2 className="destination_title">
            Eng mashhur <br /> yo'nalishlar
            </h2>
            <p className="destination_description">
            Siz uchun eng mashhur yo'nalishlardan ba'zilari go'zal manzara bilan tashrif buyuring.
            </p>
            <div className="btns_destination">
              <button className="btn_destination">
                <img src={left} alt="left" />
              </button>
              <button className="btn_destination">
                <img src={right} alt="right" />
              </button>
            </div>
          </div>
          <div className="destination_right">
            <Card
              img={cappadocia}
              title="Kapadokiya"
              description="Cho'lning qizil va to'q sariq qumi juda chiroyli, keling, bu yerda sayohat qilaylik"
              price="150"
            />
            <Card
              img={sossus}
              title="Sossusvlei"
              description="issiq havo sharlari bilan mashhur va biz uning tabiiy go'zalligini yuqoridan ko'rishimiz mumkin"
              price="200"
            />
            <Card
              img={albuq}
              title="Albukerke"
              description="salqin sayohat, chunki atrofdagi turli manzaralar juda ko'zni qamashtiradi"
              price="180"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
