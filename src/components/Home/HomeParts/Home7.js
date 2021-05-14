import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Home7.module.css";
import { structures } from "../ExtraCards/Photo";
import AOS from "aos";
import "aos/dist/aos.css";

const Home7 = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className={style.main}>
      <div className={style.linkBlock} data-aos="zoom-out-up">
        <Link to="/tuzilma">Tuzilma</Link>
      </div>
      <div className={style.container}>
        {structures.map((structure, index) => {
          return (
            <div
              key={index}
              className={style.box}
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-easing="ease-in-sine"
            >
              <div className={style.side}>
                <img src={structure.icon} alt="icon" />
              </div>
              <Link to={structure.to}>{structure.title}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home7;
