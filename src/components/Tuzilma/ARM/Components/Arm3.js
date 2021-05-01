import React from "react";
import style from "./Arm3.module.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const Arm3 = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        <Fade top cascade>
          <div className={style.head}>
            <h2>MARKAZNING VAZIFALARI</h2>
            <span></span>
          </div>
        </Fade>
        <Zoom top cascade>
          <div className={style.grid}>
            <div className={style.block}>
              <div className={style.svg}>{/* <VscOrganization/> */}</div>
              <p>
                <span></span>
                Аxborot-resurs markazi oʼz faoliyati davomida Oʼzbekiston
                Respublikasining Qonun va qarorlariga, yaʼni 2011 yil 13 aprelda
                qabul qilingan “Kutubxona - axborot faoliyati toʼgʼrisidagi
                Qonun”, Oʼzbekiston Respublikasi Prezidentining 2006 yil 20 iyun
                PQ-381 sonli «Respublika aholisini Аxborot-kutubxona bilan
                taʼminlash toʼgʼrisida»gi qarori, Oʼzbekiston Respublikasi Oliy
                va oʼrta maxsus taʼlim vazirligining 2006 yil 29 dekabr
                295-conli buyruqlari va boshqa hujjatlarga amal qiladi.
              </p>
              <p>
                <span></span>
                Аxborot-kutubxona fondi Filial “Yurisprudentsiya” yoʼnalishi
                boʼyicha kafedralar va oʼquv boʼlimi bilan kelishilgan tartibda,
                hadya qilingan resurslar, vaqtli nashrlarga qilingan obuna
                hisobiga, hamda Oliy va oʼrta maxsus taʼlimni Rivojlantirish
                markazidan, nashriyotlardan, firmalardan, oliy oʼquv yurtlaridan
                va boshqa tashkilotlardan olingan nashrlar hisobiga doimiy
                ravishda toʼldirib boriladi. Axborot-resurs markazi qonun
                hujjatlarida ko’rsatilgan va Filial Ustavida nazarda tutilgan
                hamda Filial direktori tomonidan yuklatilgan boshqa vazifalarini
                bajaradi.
              </p>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Arm3;
