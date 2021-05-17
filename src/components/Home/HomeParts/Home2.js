import React, { useEffect } from "react";
import style from "./Home2.module.css";
import president from "../../../assets/img/pr.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const Home2 = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className={style.main} data-aos="fade-up-right">
      <div className={style.container}>
        <div className={style.textPresident}>
          <h2 data-aos="fade-down">
            O'ZBEKISTON RESPUBLIKASI PREZIDENTINING 2019 YIL 7 FEVRALDAGI <br />{" "}
            PQ–4166 - SON QARORI
          </h2>
          <h3 data-aos="fade-up">Ixtisoslashtirilgan filial tashkil etildi</h3>
        </div>
        <div className={style.bgAll}>
          <div
            className={style.leftImg}
            style={{ backgroundImage: `url(${president})` }}
          ></div>
          <div className={style.rightCenter}>
            <p data-aos="fade-down">
              O'zbekiston Respublikasi Prezidentining 07.02.2019 yildagi
              “Huquqbuzarliklar profilaktikasi va jamoat xavfsizligini
              ta'minlash sohasida kadrlar tayyorlash tizimini
              takomillashtirishga doir qo'shimcha chora-tadbirlar to'g'risida”gi
              PQ–4166-son qarori bilan Toshkent davlat yuridik universitetining
              Ixtisoslashtirilgan filiali tashkil etilgan.
            </p>
          </div>
          <div className={style.rightText}></div>
        </div>
      </div>
    </div>
  );
};
export default Home2;
