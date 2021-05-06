import React from "react";
import style from "./Home2.module.css";
import president from "../../../assets/img/pr.webp";
import Fade from "react-reveal/Fade";

const Home2 = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <Fade left cascade>
          <div className={style.textPresident}>
            <h2>
              O'ZBEKISTON RESPUBLIKASI PREZIDENTINING 2019 YIL 7 FEVRALDAGI{" "}
              <br /> PQ–4166 - SON QARORI
            </h2>
            <h3>Ixtisoslashtirilgan filial tashkil etildi</h3>
          </div>
        </Fade>
        <div className={style.bgAll}>
          <div
            className={style.leftImg}
            style={{ backgroundImage: `url(${president})` }}
          ></div>
          <Fade top cascade>
          <div className={style.rightCenter}>
            <p>
              O'zbekiston Respublikasi Prezidentining 07.02.2019 yildagi
              “Huqubuzarliklar profilaktikasi va jamoa xavfsizligi ta'minlash
              sohasida kadrlar tayyorlash tizimini takomillashtirishga doir
              qo'shimcha chora-tadbirlar to'g'risida”gi PQ–4166-son qarori bilan
              Toshkent davlat yuridik universitetining Ixtisoslashtirilgan
              filiali tashkil etilgan.
            </p>
          </div>
          </Fade>
          <div className={style.rightText}></div>
        </div>
      </div>
    </div>
  );
};
export default Home2;
