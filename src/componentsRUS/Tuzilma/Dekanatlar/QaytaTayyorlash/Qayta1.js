import React from "react";
import style from "./Qayta1.module.css";
// import Rotate from "react-reveal/Rotate";

const Qayta1 = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        {/* <Rotate bottom left cascade> */}
          <div className={style.head}>
            <h2>ДЕКАНАТ КУРСОВ ПЕРЕПОДГОТОВКИ</h2>
            <span></span>
            <p>
            Ташкентского государственного юридического университета
            деканат курсов переподготовки филиала от 7 февраля 2019 года
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

export default Qayta1;
