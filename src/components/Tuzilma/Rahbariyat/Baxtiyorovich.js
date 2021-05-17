import React from "react";
import style from "./Baxtiyorovich.module.css";
import img from "../../../assets/img/djuraev.jpg";

const Baxtiyorovich = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        <div
          className={style.img}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div className={style.text}>
          <h2>Djuraev Ixtiyor Baxtiyorovich</h2>
          <h4>Oʼquv-tarbiyaviy ishlar boʼyicha direktor oʼrinbosari</h4>
          <span></span>
          <p>
            <span></span> Toshkent davlat yuridik universitetining
            Ixtisoslashtirilgan filiali direktorining oʼquv-tarbiyaviy ishlar
            boʼyicha oʼrinbosari Djuraev Ixtiyor Baxtiyorovich – 1980 yil 25
            noyabrda Qashqadaryo viloyati, Kasbi tumanida tugʼilgan. Maʼlumoti –
            oliy, huquqshunos, yuridik fanlar nomzodi. 2002 yil Toshkent davlat
            yuridik instituti bakalavriatini, 2007 yil magistraturasini
            tamomlagan. Djuraev Ixtiyor oʼz mehnat faoliyatini 2002-yilda
            Qashqadaryo viloyati Qarshi tumani Qovchin kasb-hunar kolleji
            oʼqituvchisi lavozimidan boshlab, 2003-2005 yillarda Toshkent davlat
            yuridik instituti oʼquv boʼlimi katta noziri, 2007–2012 yillarda
            Toshkent davlat yuridik instituti “Sud va huquqni muhofaza qiluvchi
            organlar” kafedrasi oʼqituvchisi, 2012-2013 yillarda Toshkent davlat
            yuridik instituti “Jinoyat protsessual huquqi” kafedrasi
            oʼqituvchisi, 2013-2014 yillarda Toshkent davlat yuridik
            universiteti Sud va huquqni muhofaza qiluvchi organlar kafedrasi
            oʼqituvchisi, Toshkent davlat yuridik universiteti Litsey va
            kollejlar bilan ishlash boʼlimi boshligʼi (oʼrindoshlik asosida),
            2014-2016 yillarda Toshkent davlat yuridik universiteti Pedagog
            kadrlarni qayta tayyorlash va malakasini oshirish fakulьteti dekani,
            2016-2019 yillarda Toshkent davlat yuridik universitetining
            Oʼquv-uslubiy boshqarma boshligʼi lavozimlarida ishlagan.
            Oʼzbekiston Respublikasi Аdliya vazirining 2019 yil 6 martdagi
            160-sht-son buyrugʼi bilan Toshkent davlat yuridik universiteti
            Ixtisoslashtirilgan filiali direktorining oʼquv-tarbiyaviy ishlar
            boʼyicha oʼrinbosari lavozimiga tayinlangan.
          </p>
          <p>
            Fuqarolarni dushanba kuni soat 10:00 dan 12:00 gacha qabul qiladi.
          </p>
          <p>
            <b>Telefon:</b> (55) 501-11-03 (2001)
          </p>
          <p>
            <b>E-mail: </b> i.djurayev@tsul.uz
          </p>
        </div>
      </div>
    </div>
  );
};

export default Baxtiyorovich;
