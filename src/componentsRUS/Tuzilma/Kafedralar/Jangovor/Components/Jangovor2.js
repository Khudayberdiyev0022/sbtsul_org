import React, { Fragment } from "react";
import style from "../../../../../components/Tuzilma/Kafedralar/Jangovor/Components/Jangovor2.module.css";
import { nameKaf, teachers } from "../ExtraCard/Json";

const Jangovor2 = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        <h2>ПРОФЕССОРСКО-ПРЕПОДАВАТЕЛЬСКИЙ СОСТАВ КАФЕДРЫ</h2>
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
                    <span></span> {teacher.abTeach2}
                  </p>
                  <p>
                    <span></span>
                    <strong>Email:</strong> {teacher.email}
                  </p>
                  {teacher.yutuqlari ? (
                    <div className={style.yut}>
                      <h4>Достижения: </h4>
                      <ul>
                        {teacher.yutuqlari.map((yutuq, index) => {
                          return (
                            <Fragment>
                              <li>{yutuq.a}</li>
                            </Fragment>
                          );
                        })}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Jangovor2;
