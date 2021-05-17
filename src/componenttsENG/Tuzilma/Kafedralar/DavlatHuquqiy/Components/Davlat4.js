import React from "react";
import style from "../../../../../components/Tuzilma/Kafedralar/DavlatHuquqiy/Components/Davlat4.module.css";
import img1 from "../../../../../assets/img/oquv111.jpg";

const Davlat4 = () => {
  return (
    <div className={style.main}>
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
                A number of educational activities to date textbooks and
                teaching aids have been published. In particular, “General
                issues of the theory of state and law”, Obshchie voprosy teorii
                gosudarstva i prava ”,“ Constitutional law ”, “Constitutional
                law”, “Court and law enforcement Organs ”textbook prepared and
                published by professors was brought. Also, by the end of the
                2020/2021 academic year preparation of 1 textbook, 2 textbooks
                scheduled; {""}
              </p>
            </div>
          </div>
          <div className={style.text}>
            <p>
              Develop appropriate curricula and study plans giving lectures and
              workshops is coming. He is currently a professor in this field by
              doing a series of systematic work by teachers is coming. {""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Davlat4;
