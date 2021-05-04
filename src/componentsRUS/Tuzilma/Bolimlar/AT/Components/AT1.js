import React from "react";
import style from "./AT1.module.css";
// import Rotate from "react-reveal/Rotate";

const AT1 = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        {/* <Rotate bottom left cascade> */}
          <div className={style.head}>
            <h2>ОТДЕЛ ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ</h2>
            <span></span>
            <p>
            Ташкентского государственного юридического университета
            филиал отдел информационных технологий Республики Узбекистан
            Президента РФ от 7 февраля 2019 года “о правонарушениях
            и обеспечения общественной безопасности
            дополнения по совершенствованию системы подготовки
            в соответствии с постановлением ПП-4166”о мерах по обеспечению
            организовано.
            </p>
          </div>
        {/* </Rotate> */}
      </div>
    </div>
  );
};

export default AT1;
