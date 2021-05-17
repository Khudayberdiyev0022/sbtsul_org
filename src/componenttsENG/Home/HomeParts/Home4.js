import React, { useEffect } from "react";
import style from "../../../components/Home/HomeParts/Home4.module.css";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";

const Home4Rus = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        <div
          className={style.card}
          data-aos="zoom-in-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <p>A specialized branch of TSUL was established</p>
          <CountUp
            start={1991}
            end={2019}
            duration={15}
            suffix="yil"
            className={style.countText}
          />
        </div>
        <div
          className={style.card}
          data-aos="zoom-out-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <p>
            Number of professors and teachers in the Specialized Branch of TSUL
          </p>
          <CountUp
            end={39}
            duration={15}
            separator=","
            className={style.countText}
          />
        </div>
        <div
          className={style.card}
          data-aos="zoom-in-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <p>Number of students in the Specialized Branch of TSUL</p>
          <CountUp
            end={572}
            duration={15}
            suffix="ta"
            className={style.countText}
          />
        </div>
      </div>
    </div>
  );
};

export default Home4Rus;
