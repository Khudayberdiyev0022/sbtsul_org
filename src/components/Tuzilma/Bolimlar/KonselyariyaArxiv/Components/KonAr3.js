import React from "react";
import style from "./KonAr3.module.css";
// import Fade from "react-reveal/Fade";
// import Zoom from "react-reveal/Zoom";

const KonAr3 = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        {/* <Fade top cascade> */}
          <div className={style.head}>
            <h2>BO‘LIMNING VAZIFALARI</h2>
            <span></span>
          </div>
        {/* </Fade> */}
        {/* <Zoom top cascade> */}
          <div className={style.grid}>
            <div className={style.block}>
              <div className={style.svg}>{/* <VscOrganization/> */}</div>
              <p>
                <li>
                  Toshkent davlat yuridik universitetining Ixtisoslashtirilgan
                  filiali Kanselyariyasi va arxivi 2019 yil 7 fevraldagi
                  “Huquqbuzarliklar profilaktikasi va jamoat xavfsizligini
                  taʼminlash sohasida kadrlar tayyorlash tizimini
                  takomillashtirishga doir qo‘shimcha chora-tadbirlar
                  to‘g‘risida”gi qaroriga muvofiq tashkil etilgan.
                </li>
              </p>
              <p>
                <li>
                  Kanselyariya va arxiv Filialning tarkibiy bo‘linmasi
                  hisoblanib, filialda ish yuritish va elektron hujjat
                  almashinuvini taʼminlash hamda filial faoliyatiga oid arxiv
                  hujjatlarini tizimli hisobga olish va tegishli sharoitda
                  saqlashni amalga oshiradi.
                </li>
              </p>
              <p>
                <li>
                  Kanselyariya va arxivning asosiy vazifalari, ish yuritish va
                  elektron hujjat almashinuvini taʼminlash, tarkibiy
                  bo‘linmalarda muxr va shtamplar hisobini yuritish, arxiv ish
                  yurituvini taʼminlashdan iborat.
                </li>
              </p>
              <p>
                <li>
                  Filial kanselyariyasida 1 nafar kanselyariya mudiri, 1 nafar
                  arxivarius, 1 nafar kuryer vazifalarida xodimlar faoliyat olib
                  bormoqda.
                </li>
              </p>
              <p>
                <li>
                  Filialda yuritilayotgan hujjatlarni elektron tarzda nazorat
                  qilish uchun av.ijro.uz dasturidan foydalanib kelinmoqda.
                </li>
              </p>
            </div>
          </div>
        {/* </Zoom> */}
      </div>
    </div>
  );
};

export default KonAr3;
