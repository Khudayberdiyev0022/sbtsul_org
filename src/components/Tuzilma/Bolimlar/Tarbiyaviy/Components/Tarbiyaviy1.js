import React from "react";
import style from "./Tarbiyaviy1.module.css";
import Rotate from "react-reveal/Rotate";

const Tarbiyaviy1 = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        <Rotate bottom left cascade>
          <div className={style.head}>
            <h2>TARBIYAVIY ISHLAR BO’LIMI</h2>
            <span></span>
            <p>
              Toshkent davlat yuridik universitetining Ixtisoslashtirilgan
              filiali Tarbiyaviy ishlar bo’limi Filial tarkibiy bo’linmasi
              sifatida O‘zbekiston Respublikasi Prezidentining 2019-yil
              7-fevraldagi “Huquqbuzarliklar profilaktikasi va jamoat
              xafsizligini ta’minlash sohasida kadrlar tayyorlash tizimini
              takomillashtirishga doir qo‘shimcha chora-tadbirlar to‘g‘risida”gi
              PQ-4166-sonli qaroriga muvofiq tashkil etilgan.
            </p>
          </div>
        </Rotate>
      </div>
    </div>
  );
};

export default Tarbiyaviy1;