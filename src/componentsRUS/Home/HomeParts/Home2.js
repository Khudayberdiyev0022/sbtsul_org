import React from "react";
import style from "../../../components/Home/HomeParts/Home2.module.css";
import president from "../../../assets/img/pr.webp";

const Home2 = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.textPresident}>
          <h2>
            Филиал создан на основании Постановления Президента Республики
            Узбекистан <br /> № ПП-4166 от 7 февраля 2019 года
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
              Специализированный Филиал Ташкентского Государственного
              Юридического Университета создан на основании Постановления
              Президента Республики Узбекистан «О дополнительных мерах по
              совершенствованию системы подготовки кадров в сфере профилактики
              правонарушений и обеспечения общественной безопасности № ПП-4166
              ОТ 7 февраля 2019 года
            </p>
          </div>
          <div className={style.rightText}></div>
        </div>
      </div>
    </div>
  );
};
export default Home2;
