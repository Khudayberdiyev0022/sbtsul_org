import React, { useEffect } from "react";
import style from "../../../components/Home/HomeParts/Home2.module.css";
import president from "../../../assets/img/pr.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const Home2 = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className={style.main} data-aos="fade-up-right">
      <div className={style.container}>
        <div className={style.textPresident}>
          <h2 data-aos="fade-down">
            PRESIDENT OF THE REPUBLIC OF UZBEKISTAN FEBRUARY 7, 2019 <br /> PQ –
            4166 - NUMBER DECISION
          </h2>
          <h3 data-aos="fade-up">A specialized branch was established</h3>
        </div>
        <div className={style.bgAll}>
          <div
            className={style.leftImg}
            style={{ backgroundImage: `url(${president})` }}
          ></div>
          <div className={style.rightCenter}>
            <p data-aos="fade-down">
              Decree of the President of the Republic of Uzbekistan dated
              07.02.2019 “Crime prevention and community safety to improve the
              system of training in the field On additional measures ”No.
              PP-4166 Tashkent State Law University Specialized branch was
              established.
            </p>
          </div>
          <div className={style.rightText}></div>
        </div>
      </div>
    </div>
  );
};
export default Home2;
