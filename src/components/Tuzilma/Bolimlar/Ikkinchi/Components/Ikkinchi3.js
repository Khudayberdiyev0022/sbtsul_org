import React from "react";
import style from "./Ikkinchi3.module.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const Ikkinchi3 = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        <Fade top cascade>
          <div className={style.head}>
            <h2>BO‘LIMNING VAZIFALARI</h2>
            <span></span>
          </div>
        </Fade>
        <Zoom top cascade>
          <div className={style.grid}>
            <div className={style.block}>
              <div className={style.svg}>{/* <VscOrganization/> */}</div>
              <p>
                Bo‘lim Filialning tarkibiy bo‘linmasi hisoblanib, harbiy
                xizmatga majburlar va chaqiriluvchilarning ro‘yxatini yuritish
                hamda xodimlarni safarbarlik vaqtida bronlashtirish ishlarini
                amalga oshiradi.
              </p>
              <p>
                Ikkinchi bo’lim harbiy xizmatga majburlar va
                chaqiriluvchilarning harbiy ro‘yxat qoidalariga rioya
                etishlarini ta’minlash;
              </p>
              <p>
                zaxira va rezervdagi harbiy xizmatga majburlarga oid hujjatlarni
                yuritish;
              </p>
              <p>
                harbiy xizmatga majburlar va chaqiriluvchilarning umumiy harbiy
                xizmat va harbiy xizmatga oid qonun hujjatlari talablarini
                bajarish va ularning harbiy hisob qoidalariga amal qilishlari
                yuzasidan tushuntirish ishlarini olib borish;
              </p>
              <p>
                harbiy xizmatga majburlar va chaqiriluvchilarni shaxsiy
                ro‘yxatga olish;
              </p>
              <p>
                mudofaa ishlari organlari talabi bilan harbiy ro‘yxatda turgan
                shaxslar to‘g‘risidagi zarur ma’lumotlarni taqdim etish;
              </p>
              <p>
                harbiy xizmatga majburlar va chaqiriluvchilarni harbiy xizmatga
                chaqirilayotganligidan xabardor etishlari hamda ularning
                chaqiruv bo‘yicha o‘z vaqtida hozir bo‘lishlarini ta’minlash;
              </p>
              <p>
                harbiy xizmatga aloqadorlar va chaqiriluvchilar ishga (o‘qishga)
                qabul qilingan, ishdan bo‘shagan (talabalar safidan
                chetlashtirilgan) harbiy xizmatga aloqador va chaqiriluvchilar
                haqida mudofaa ishlari bo‘limlariga belgilangan muddatlarda
                xabar berish;
              </p>
              <p>
                fuqarolarni ishga (o‘qishga) qabul qilishda ularning harbiy
                hisob hujjatlari hisob raqamini tekshirish va ularning turar
                joyidan harbiy hisobda turishini aniqlash;
              </p>
              <p>
                xodimlarni safarbarlik vaqtida bronlashtirib qo‘yish ishlarini
                amalga oshirish;
              </p>
              <p>
                muassasalar va fuqarolar bilan bo‘lim faoliyatiga taalluqli
                ishlar bo‘yicha yozishmalarni olib borish;
              </p>
              <p>
                zaxira va rezervdagi ofitserlar guvohnomalarida, safarbarlik
                chaqiruv rezervi xizmatchilari va zaxira, rezerv xizmatchilari
                guvohnomalari va chaqiruvdagilar guvohnomalaridagi yozuvlar
                ularning shaxsiy kartochkalaridagi yozuvlarni (T-2 shakl) qayd
                etib borish;
              </p>
              <p>
                zaxira va rezervdagi ofitserlarning shaxsiy kartochkalarini bir
                yildan kam bo‘lmagan muddatda shahar va tumandagi mudofaa
                ishlari bo‘limlariga taqqoslash uchun taqdim etish;
              </p>
              <p>
                harbiy xizmatga majbur shaxslarga ma’lumotnomalar va boshqa
                hujjatlarni rasmiylashtirish kabi vazifalarni bajaradi.
              </p>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Ikkinchi3;
