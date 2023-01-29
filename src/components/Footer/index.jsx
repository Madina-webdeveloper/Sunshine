import React from "react";
import "./index.css";
import logo_footer from "../../assets/images/logo_footer.svg";

const index = () => {
  return (
    <>
      <footer>
        <div className="container footer">
          <div className="footer_first">
            <div className="footer_left">
              <img src={logo_footer} alt="logo" />
              <p className="footer_description">
              Sunshine bilan siz yangi sayohatlar va biz taklif qiladigan eng yaxshi sayyohlik yo'nalishlarini boshdan kechirishingiz mumkin
              </p>
            </div>
            <div className="footer_right">
              <ul className="footer_ul">
                <h4 className="footer_ul_title">Manzillar</h4>
                <li className="footer_ul_li">Kapadokiya</li>
                <li className="footer_ul_li">Sossusvlei</li>
                <li className="footer_ul_li">Albukera</li>
              </ul>
            
              <ul className="footer_ul">
                <h4 className="footer_ul_title">Bizni kuzatib boring</h4>
                <li className="footer_ul_li">
                  <a target="_blank" href="https://instagram.com/sunshine_traveluzb?igshid=YmMyMTA2M2Y=" className="footer_ul_li_link"><i class="fa-brands fa-instagram"></i>Instagram</a>
                </li>
                <li className="footer_ul_li">
                  <a target="_blank" href="https://t.me/sunshine_traveluzb" className="footer_ul_li_link"><i class="fa-brands fa-telegram"></i>Telegram</a>
                </li>
                <li className="footer_ul_li">
                  <a target="_blank" href="mailto:Sunshine.traveluzb@gmail.com" className="footer_ul_li_link"><i class="fa-regular fa-envelope"></i>Email</a>
                </li>
                <li className="footer_ul_li">
                  <a target="_blank" href="tel:998903598101" className="footer_ul_li_link"><i class="fa-solid fa-phone"></i>+998903598101</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer_second">
            <p className="footer_p">
              Copyright © Sunshine {new Date().getFullYear()}
            </p>
            <div className="footer_last">
              <p className="footer_p">Terms & Conditions</p>
              <p className="footer_p">Privacy Policy</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default index;
