import React from "react";
import style from "./Home2.module.css";
import president from "../../../assets/img/pr.webp";

const Home2 = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.textPresident}>
          <h2>
            ПРЕЗИДЕНТ РЕСПУБЛИКИ УЗБЕКИСТАН 7 ФЕВРАЛЯ 2019 ГОДА <br/> {""}
            PQ - 4166 - НОМЕРНОЕ РЕШЕНИЕ
          </h2>
          <h3>Создан специализированный филиал</h3>
        </div>
        <div className={style.bgAll}>
          <div
            className={style.leftImg}
            style={{ backgroundImage: `url(${president})` }}
          ></div>
          <div className={style.rightCenter}>
            <p>
            Указ Президента Республики Узбекистан от 07.02.2019 г.
              «Предупреждение преступности и общественная безопасность
              улучшить систему обучения на местах
              О дополнительных мерах »№ ПП-4166.
              Ташкентский Государственный Юридический Университет Специализированный
              филиал был создан.
            </p>
          </div>
          <div className={style.rightText}></div>
        </div>
      </div>
    </div>
  );
};
export default Home2;
