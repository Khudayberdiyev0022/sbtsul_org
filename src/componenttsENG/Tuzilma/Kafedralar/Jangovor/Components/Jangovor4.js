import React from "react";
import style from "../../../../../components/Tuzilma/Kafedralar/Jangovor/Components/Jangovor4.module.css";
import img1 from "../../../../../assets/img/ou1.jpg";
import img2 from "../../../../../assets/img/ou2.jpg";

const Jangovor4 = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        <h2> EDUCATIONAL AND METHODICAL ACTIVITIES </h2>
        <span></span>
        <div className={style.column}>
          <div className={style.flex}>
            <div
              className={style.img}
              style={{ backgroundImage: `url(${img1})` }}
            ></div>
            <div className={style.text1}>
              <p>
                Educational and educational-methodical work is organized at the
                proper level. Within the framework of educational activities,
                the teachers of the department F. Dosumkhodjaev and Kh. Akhmedov
                developed and published textbooks ("Fire training", "Basics of
                Sambo"). In addition, by the end of 2020/2021, it is planned to
                prepare and publish 1 textbook, 2 study guides and 4 study
                guides.
              </p>
            </div>
          </div>
          <div className={style.text}>
            <p>
              The educational process is organized according to the approved
              curricula and programs through lectures and seminars. Currently,
              effective cooperation has been established in the field of
              education with military units and universities of the Ministries
              of Internal Affairs, Defense, and the National Guard, with the
              participation of their specialists various "master classes",
              seminars, demonstration classes, meetings and round tables are
              organized.
            </p>
          </div>
          <div className={style.flex2}>
            <div className={style.text1}>
              <p>
                For the effective organization of physical culture and sports
                classes, the necessary conditions have been created, including
                the appropriate educational and methodological base, the proper
                sports equipment and property have been purchased.
              </p>
            </div>
            <div
              className={style.img}
              style={{ backgroundImage: `url(${img2})` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jangovor4;
