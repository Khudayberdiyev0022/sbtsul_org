import React from "react";
import style from "./KonAr1.module.css";
// import Rotate from "react-reveal/Rotate";

const KonAr1 = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        {/* <Rotate bottom left cascade> */}
          <div className={style.head}>
            <h2>КАНЦЕЛЯРИЯ И АРХИВНЫЙ ОТДЕЛ</h2>
            <span></span>
            <p>
            Ташкентского государственного юридического университета
            канцелярия и архив филиала от 7 февраля 2019 года
            "Профилактика правонарушений и обеспечение общественной безопасности
            системы подготовки кадров в сфере обеспечения
            о дополнительных мерах по совершенствованию законодательства
            в соответствии с постановлением правительства Кыргызской Республики.
            </p>
          </div>
        {/* </Rotate> */}
      </div>
    </div>
  );
};

export default KonAr1;
