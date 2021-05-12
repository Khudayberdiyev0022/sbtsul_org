import React from "react";
import style from "./Ekspluatatsiya1.module.css";
// import Rotate from "react-reveal/Rotate";

const Ekspluatatsiya1 = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        {/* <Rotate bottom left cascade> */}
        <div className={style.head}>
          <h2>EKSPLUATATSIYA-XO‘JALIK BO‘LIMI HAQIDA UMUMIY MA'LUMOT</h2>
          <span></span>
          <p>
            Toshkent davlat yuridik universitetining Ixtisoslashtirilgan filiali
            Ekspluatatsiya-xo‘jalik bo‘limi filial tarkibiy bo’linmasi sifatida
            O‘zbekiston Respublikasi Prezidentining 2019-yil 7-fevraldagi
            “Huquqbuzarliklar profilaktikasi va jamoat xafsizligini ta’minlash
            sohasida kadrlar tayyorlash tizimini takomillashtirishga doir
            qo‘shimcha chora-tadbirlar to‘g‘risida”gi PQ-4166-sonli qaroriga
            muvofiq tashkil etilgan.
          </p>
        </div>
        {/* </Rotate> */}
      </div>
    </div>
  );
};

export default Ekspluatatsiya1;
