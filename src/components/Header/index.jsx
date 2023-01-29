import React from "react";
import "./index.css";
import Logo from "../../assets/images/logo.svg";

const index = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav className="header">
        <a href="#">    <img src={Logo} alt="logo" /></a>
          

            <div className="btns">
              <a href="#contact" className="login">Biz bilan bog'lanish</a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default index;
