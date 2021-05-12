import React from "react";
import style from "../../../../../components/Tuzilma/Bolimlar/Kadrlar/Components/Kadrlar2.module.css";
import { nameKaf, teachers } from "../ExtraCard/Json";

const Kadrlar2 = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
          <h2>THE STAFF OF THE HUMAN RESOURSING</h2>
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
                      {teacher.abTeach1}  {nameKaf}
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

export default Kadrlar2;
