import React from "react";
import style from "./Jangovor1.module.css";
// import Rotate from "react-reveal/Rotate";

const Jangovor1 = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        {/* <Rotate bottom left cascade> */}
          <div className={style.head}>
            <h2>КАФЕДРА ПРОФЕССИОНАЛЬНО-БОЕВОЙ ПОДГОТОВКИ</h2>
            <span></span>
            <p>
            Кафедра профессионально-боевой подготовки специализированного филиала Ташкентского государственного юридического университета создана в соответствии с постановлением Президента Республики Узбекистан от 7 февраля 2019 года № ПП-4166 “о дополнительных мерах по совершенствованию системы подготовки кадров в сфере профилактики правонарушений и обеспечения общественной безопасности”.
            </p>
          </div>
        {/* </Rotate> */}
      </div>
    </div>
  );
};

export default Jangovor1;
