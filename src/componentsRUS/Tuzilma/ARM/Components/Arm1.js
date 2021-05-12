import React from "react";
import style from "../../../../components/Tuzilma/ARM/Components/Arm1.module.css";
// import Rotate from "react-reveal/Rotate";

const Arm1 = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        {/* <Rotate bottom left cascade> */}
          <div className={style.head}>
            <h2>ИНФОРМАЦИОННО-РЕСУРСНЫЙ ЦЕНТР</h2>
            <span></span>
            <p>
            Информационно-ресурсный центр Специализированного филиала Ташкентского государственного юридического университета создан в качестве структурного подразделения Филиала в соответствии с постановлением Президента Республики Узбекистан от 7 февраля 2019 года за № ПП-4166 «О дополнительных мерах по совершенствованию системы подготовки кадров в сфере профилактики правонарушений и обеспечения общественной безопасности».
            </p>
          </div>
        {/* </Rotate> */}
      </div>
    </div>
  );
};

export default Arm1;
