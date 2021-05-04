import React from "react";
import style from "./Davlat6.module.css";
import bg from "../../../../../assets/img/section_bg04.jpg";
import img from "../../../../../assets/img/manaviy12.jpg";
// import Bounce from "react-reveal/Bounce";

const Davlat6 = () => {
  return (
    <div className={style.main} style={{ backgroundImage: `url(${bg})` }}>
      {/* <Bounce top cascade> */}
        <div className={style.inMain}>
          <h2>SPIRITUAL-EDUCATIONAL AND EDUCATIONAL-MORAL WORK</h2>
          <span></span>
          <div className={style.text}>
            <div
              className={style.img}
              style={{ backgroundImage: `url(${img})` }}
            ></div>
            <p>
              <span></span>Professors and teachers of the Department of Public Law
               roundtable discussions with students on a regular basis and
               various meetings are being organized. Chair
               faculty with the Department of Educational Affairs
               meaningful organization of student leisure time together
               In order to train students in various theaters,
               have been visiting museums and parks.
            </p>
          </div>
          <p>
            <span></span> There are also permanent professors and teachers of the department
             in their speeches to the media
             In addition to knowing where to go, the legal awareness and legal culture of the population
             carry out spiritual and educational work to increase
             and on problematic issues of citizens
             have been giving reasoned answers to the questions posed.
          </p>
        </div>
      {/* </Bounce> */}
    </div>
  );
};

export default Davlat6;
