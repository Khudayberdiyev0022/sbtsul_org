import React from "react";
import style from "./AT1.module.css";
import Rotate from "react-reveal/Rotate";

const AT1 = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        <Rotate bottom left cascade>
          <div className={style.head}>
            <h2>AXBOROT TEXNOLOGIYALARI BO’LIMI</h2>
            <span></span>
            <p>
              Toshkent davlat yuridik universitetining Ixtisoslashtirilgan
              filiali Axborot texnologiyalari bo’limi O‘zbekiston Respublikasi
              Prezidentining 2019 yil 7 fevraldagi “Xuquqbuzаrliklar
              profilaktikasi va jamoat xafsizligini ta’minlash sohasida kadrlar
              tayyorlash tizimini takomillashtirishga doir qo‘shimcha
              chora-tadbirlar to‘g‘risida”gi PQ-4166-sonli qaroriga muvofiq
              tashkil etilgan.
            </p>
          </div>
        </Rotate>
      </div>
    </div>
  );
};

export default AT1;
