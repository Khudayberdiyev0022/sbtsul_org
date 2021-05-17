import React, { useEffect } from "react";
import style from "./Home4.module.css";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";

const Home4 = () => {
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
          <p>TDYU Ixtisoslashtirilgan filiali tashkil topgan</p>
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
          <p>TDYU Ixtisoslashtirilgan filialida Professor-o'qituvchilar soni</p>
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
          <p>TDYU Ixtisoslashtirilgan filialida talabalar soni</p>
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

export default Home4;
