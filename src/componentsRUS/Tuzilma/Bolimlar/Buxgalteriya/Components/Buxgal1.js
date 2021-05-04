import React from "react";
import style from "./Buxgal1.module.css";
// import Rotate from "react-reveal/Rotate";

const Buxgal1 = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        {/* <Rotate bottom left cascade> */}
          <div className={style.head}>
            <h2>БУХГАЛТЕРСКИЙ ОТДЕЛ</h2>
            <span></span>
            <p>
            Ташкентского государственного юридического университета
            бухгалтерия филиала как структурное подразделение филиала
            Указ Президента Республики Узбекистан от 7 февраля 2019 года
            "Профилактика правонарушений и обеспечение общественной безопасности
            о совершенствовании системы подготовки кадров в сфере
            к постановлению ПП-4166”о дополнительных мерах по
            организуется в соответствии с.
            </p>
          </div>
        {/* </Rotate> */}
      </div>
    </div>
  );
};

export default Buxgal1;
