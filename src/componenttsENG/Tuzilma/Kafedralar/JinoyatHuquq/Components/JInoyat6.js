import React from "react";
import style from "../../../../../components/Tuzilma/Kafedralar/JinoyatHuquq/Components/Jinoyat6.module.css";
import bg from "../../../../../assets/img/section_bg04.jpg";
import img from "../../../../../assets/img/manav121.jpg";

const JInoyat6 = () => {
  return (
    <div className={style.main} style={{ backgroundImage: `url(${bg})` }}>
      <div className={style.inMain}>
        <h2>SPIRITUAL-EDUCATIONAL AND EDUCATIONAL-MORAL WORK</h2>
        <span></span>
        <div className={style.text}>
          <div
            className={style.img}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
          <p>
            <span></span> Department of Criminal Law professors and teachers
            talk to students organizes Professors and teachers of the department
            with students joint victory garden, Republican forensic examination
            Scientific-practical centers, "Elobod" located in M. Ulugbek
            district MFY and neighborhood law enforcement, criminal cases in
            collaboration with Yunusabad district court, criminal case visits to
            the viewing process and a number of others meetings were organized.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JInoyat6;
