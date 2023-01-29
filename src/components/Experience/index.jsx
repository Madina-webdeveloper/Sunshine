import React from "react";
import "./index.css"
import experience_img from "../../assets/images/experience.png";
import ExperienceCard from "../../UI/ExperienceCard";
import price from "../../assets/images/price.png";
import exper from "../../assets/images/exper.png";
import friendly from "../../assets/images/friendly.png"

const index = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="experience_wrapper">
            <div className="experience_left">
              <h2 className="experience_title">Qiziqarli tajribaga <br /> ega bo'ling</h2>
              <p className="experience_description">
              Sunshine bilan siz bayram sayohatlarida eng yaxshi tajribaga ega bo'lishingiz mumkin,
 va biz doimo dunyodagi eng so'nggi va eng yaxshi yo'nalishlarni yangilaymiz
              </p>
              <img src={experience_img} alt="experience" className="img_exper" />
            </div>
            <div className="experience_right">
              <ExperienceCard
                photo={price}
                title="Qulay narxlar"
                description="Biz boshqalarga nisbatan juda hamyonbop narxlarni taqdim etamiz."
              />
                <ExperienceCard
                photo={exper}
                title="Unutilmas tajriba"
                description="Biz unutilmas dam olish tajribasini taqdim etamiz."
              />
                <ExperienceCard
                photo={friendly}
                title="Juda samimiy xizmat"
                description="Biz mijozlarimiz uchun mukammal va samimiy xizmatni taqdim etamiz."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
