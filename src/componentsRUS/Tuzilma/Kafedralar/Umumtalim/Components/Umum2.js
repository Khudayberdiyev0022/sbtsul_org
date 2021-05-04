import React, { Fragment } from "react";
import style from "./Umum2.module.css";
import { nameKaf, teachers } from "../ExtraCard/Json";
// import Zoom from "react-reveal/Zoom";

const Umum2 = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        {/* <Zoom right> */}
          <h2>СОСТАВ ПРОФЕССОРСКО-ПРЕПОДАВАТЕЛЬСКОГО СОСТАВА КАФЕДРЫ</h2>
          <span></span>
        {/* </Zoom> */}
        {/* <Zoom top cascade> */}
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
                        <h4>Yutuqlari:</h4>
                        <p>{teacher.yut}</p>
                        <ul>
                          {teacher.yutuqlari.map((yutuq, index) => {
                            return (
                              <Fragment key={index}>
                                <li>{yutuq.a}</li>
                              </Fragment>
                            );
                          })}
                        </ul>
                      </div>
                    ) : null}

                    {teacher.malaka ? (
                      <div className={style.yut}>
                        <h4>Malaka oshirish:</h4>
                        <ul>
                          {teacher.malaka.map((malakaO, index) => {
                            return (
                              <Fragment key={index}>
                                <li>{malakaO.a}</li>
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
        {/* </Zoom> */}
      </div>
    </div>
  );
};

export default Umum2;
