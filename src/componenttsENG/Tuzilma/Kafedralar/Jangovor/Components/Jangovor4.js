import React from "react";
import style from "./Jangovor4.module.css";
import img1 from "../../../../../assets/img/ou1.jpg";
import img2 from "../../../../../assets/img/ou2.jpg";
// import Bounce from "react-reveal/Bounce";

const Jangovor4 = () => {
  return (
    <div className={style.main}>
      {/* <Bounce top cascade> */}
        <div className={style.inMain}>
          <h2>EDUCATIONAL AND EDUCATIONAL WORKS</h2>
          <span></span>
          <div className={style.column}>
            <div className={style.flex}>
              <div
                className={style.img}
                style={{ backgroundImage: `url(${img1})` }}
              ></div>
              <div className={style.text1}>
                <p>
                F. Dosumkhodjaev and Kh.
                   Akhmedov's textbooks ("Fire preparation",
                   "Shooting Training," "Sambo Basics")
                   expected. In addition, by the end of 2020/2021 1
                   textbooks, 2 manuals and 4 teaching aids
                   manuals are planned to be prepared and published;
                </p>
              </div>
            </div>
            <div className={style.text}>
              <p>
              Develop appropriate curricula and study plans
                 giving lectures and workshops
                 is coming. Currently, the Ministry of Internal Affairs,
                 Ministries of Defense and the National Guard military unit and higher
                 effective cooperation with educational institutions,
                 with their military (employee) specialists
                 joint master classes, workshops, exhibitions,
                 meetings and roundtables are also organized;
              </p>
            </div>
            <div className={style.flex2}>
              <div className={style.text1}>
                <p>
                Effective physical education and sports
                   all necessary facilities and objects for the organization,
                   including for a variety of sports and
                   gymnasiums are available, suitable for short periods
                   conditions are created, sports equipment and facilities
                   purchased.
                </p>
              </div>
              <div
                className={style.img}
                style={{ backgroundImage: `url(${img2})` }}
              ></div>
            </div>
          </div>
        </div>
      {/* </Bounce> */}
    </div>
  );
};

export default Jangovor4;
