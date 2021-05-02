import React from "react";
import style from "./Kengash2.module.css";
import { nameKaf, teachers } from "../ExtraCard/Json";
// import Zoom from "react-reveal/Zoom";

const Kengash2 = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        {/* <Zoom right> */}
          <h2>KENGASH TARKIBI</h2>
          <span></span>
        {/* </Zoom> */}
        <div className={style.map}>
          {teachers.map((teacher, index) => {
            return (
              <div className={style.card} key={index}>
                <div
                  className={style.teachImg}
                  style={{ backgroundImage: `url(${teacher.img})` }}
                >
                  <div className={style.hov}>
                    <p>{teacher.name}</p>
                  </div>
                </div>
                <div className={style.text}>
                  <h3>{teacher.name}</h3>
                  <p>
                    <span></span>
                    {nameKaf} {teacher.abTeach1}
                  </p>
                  <p>
                    <span></span>
                    <strong>Email:</strong> {teacher.email}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Kengash2;
