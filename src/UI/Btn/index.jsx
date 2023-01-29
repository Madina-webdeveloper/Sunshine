import React from "react";
import "./button.css";

const index = (btn) => {
  return (
    <>
      <button className="btn_section">
        {btn.theme}
        <i class="fa-solid right fa-angle-right"></i>
      </button>
    </>
  );
};

export default index;
