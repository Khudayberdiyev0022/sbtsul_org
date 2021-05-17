import React from "react";
import style from "./Moliya2.module.css";
import { nameKaf, teachers } from "../ExtraCard/Json";

const Moliya2 = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        <h2>MOLIYA-IQTISOD BO‘LIMI XODIMLARINING TARKIBI</h2>
        <span></span>
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

export default Moliya2;
