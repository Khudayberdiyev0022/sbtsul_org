import React from "react";
import style from "./IlmiyKengash.module.css";
import Rotate from "react-reveal/Rotate";

const IlmiyKengash = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        <Rotate bottom left cascade>
          <div className={style.head}>
            <h2>
              PhD.07/28.08.2020.Yu.22a.04 raqamli ilmiy Kengashning faoliyati
              yuzasidan <br /> MA'LUMOTNOMA
            </h2>
            <span></span>
            <p>
            Toshkent davlat yuridik universiteti Ixtisoslashtirilgan filiali huzurida Oliy attestatsiya komissiyasi Rayosatining 28.08.2020 yildagi 285/2-son, 285/3-son qarorlari bilan tuzilgan “12.00.14 – Huquqbuzarliklar profilaktikasi. Jamoat xavfsizligini taʼminlash. Probatsiya faoliyati” ixtisosligi boʼyicha yuridik fanlar boʼyicha falsafa doktori (PhD) ilmiy darajasini beruvchi PhD.07/28.08.2020.Yu.22a.04 raqamli ilmiy kengash faoliyat yuritib kelmoqda.
            </p>
          </div>
        </Rotate>
      </div>
    </div>
  );
};

export default IlmiyKengash;
