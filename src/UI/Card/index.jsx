import React from "react";
import "./index.css";

const index = (box) => {
  return (
    <>
      <div className="box">
        <img src={box.img} alt="image" className="box_img" />
        <div className="box_wrap">
          <div className="titles">
            <h3 className="box_title">{box.title}</h3>
            <p className="box_description">{box.description}</p>
          </div>
          <div className="box_prices">
            <div className="box_right_prices">
              <p className="price">Narx</p>
              <p className="person">
                <span span className="person_price">
                  $ {box.price}
                </span>
                /odam boshi
              </p>
            </div>
            <button className="price_btn">Chipta bron qilish</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
