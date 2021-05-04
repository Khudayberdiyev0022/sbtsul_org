import React from "react";
import { Link } from "react-router-dom";
import style from "./Home3.module.css";

const Home3 = () => {
  return (
    <div className={style.main}>
      <div className={style.skewedBox}>
        <div className={style.container}>
          <div className={style.rahbariyatLink}>
            <Link to="/rahbariyat">Rahbariyat</Link>
          </div>
          <h2>Djuraev Ixtiyor Baxtiyorovich</h2>
          <p className={style.rektor}>
            Oʼquv-tarbiyaviy ishlar boʼyicha direktor oʼrinbosari
          </p>
          <p>
            Toshkent davlat yuridik universitetining Ixtisoslashtirilgan filiali
            direktorining oʼquv-tarbiyaviy ishlar boʼyicha oʼrinbosari. Djuraev
            Ixtiyor Baxtiyorovich – 1980 yil 25 noyabrda Qashqadaryo viloyati,
            Kasbi tumanida tugʼilgan. Maʼlumoti – oliy, huquqshunos, yuridik
            fanlar nomzodi. 2002 yil Toshkent davlat yuridik instituti
            bakalavriatini, 2007 yil magistraturasini tamomlagan. Djuraev
            Ixtiyor oʼz mehnat faoliyatini 2002-yilda Qashqadaryo viloyati
            Qarshi tumani Qovchin kasb-hunar kolleji oʼqituvchisi lavozimidan
            boshlab, 2003-2005 yillarda Toshkent davlat yuridik instituti oʼquv
            boʼlimi katta noziri, 2007–2012 yillarda Toshkent davlat yuridik
            instituti “Sud va huquqni muhofaza qiluvchi organlar” kafedrasi
            {/* oʼqituvchisi, 2012-2013 yillarda Toshkent davlat yuridik instituti
            “Jinoyat protsessual huquqi” kafedrasi oʼqituvchisi, 2013-2014
            yillarda Toshkent davlat yuridik universiteti Sud va huquqni
            muhofaza qiluvchi organlar kafedrasi oʼqituvchisi, Toshkent davlat
            yuridik universiteti Litsey va kollejlar bilan ishlash boʼlimi
            boshligʼi (oʼrindoshlik asosida), 2014-2016 yillarda Toshkent davlat
            yuridik universiteti Pedagog kadrlarni qayta tayyorlash va
            malakasini oshirish fakulьteti dekani, 2016-2019 yillarda Toshkent
            davlat yuridik universitetining Oʼquv-uslubiy boshqarma boshligʼi
            lavozimlarida ishlagan. Oʼzbekiston Respublikasi Аdliya vazirining
            2019 yil 6 martdagi 160-sht-son buyrugʼi bilan Toshkent davlat
            yuridik universiteti Ixtisoslashtirilgan filiali direktorining
            oʼquv-tarbiyaviy ishlar boʼyicha oʼrinbosari lavozimiga tayinlangan. */}
          </p>

          <div className={style.containerButton}>
            <Link to="/rahbariyat">
              <span>Batafsil...</span>
              <span>Batafsil...</span>
            </Link>
          </div>
        </div>
      </div>
      <div className={style.sec2}>
        <h2>Xurozov Zafar Kaxramonovich</h2>
        <p className={style.rektor}>
          Moliya-xoʼjalik ishlari boʼyicha direktori oʼrinbosari
        </p>
        <p>
          Toshkent davlat yuridik universitetining Ixtisoslashtirilgan filiali
          direktorining moliya-xoʼjalik ishlari boʼyicha oʼrinbosari Xurozov
          Zafar Qaxramonovich – 1984-yil 27-aprelda Samarqand viloyatida
          tugʼilgan. Maʼlumoti oliy. 2008-yilda Toshkent davlat agrar
          universitetining “Iqtisodiyot” yoʼnalishini tamomlagan. 2017-yilda
          Oʼzbekiston Respublikasi Bank-moliya akademiyasining “Davlat
          moliyasini boshqarish” ixtisosligi boʼyicha magistraturani tugatgan. U
          2005 yil Shvetsiya, 2006-2007 yillar Shveytsariya va 2016 yil Yaponiya
          davlatlarida xalqaro student almashish dasturlari tinglovchisi boʼlib
          {/* qaytgan. Mehnat faoliyatini 2008 yilda “Bayteks-Ticaret” chet el
          korxonasi markaziy rejalashtirish boʼlimi mutaxassisi lavozimidan
          boshlagan. 2009–2010-yillarda Oʼzbekiston Respublikasi Moliya
          vazirligi Oʼquv markazi buxgalteri, 2010-2012 yillarda Oʼzbekiston
          Respublikasi Ilmiy-texnikaviy va tibbiyot hujjatlari markaziy davlat
          arxivi bosh buxgalteri, 2012-yil Toshkent mehmonxona xoʼjaligi va
          servis kasb-hunar kolleji oʼquv ishlari boʼyicha direktor oʼrinbosari,
          2012–2013-yillarda Toshkent davlat texnika universiteti bosh buxgalter
          oʼrinbosari, 2013-2017 yillarda Toshkent davlat yuridik universiteti
          Moliya-iqtisod boʼlimi boshligʼi, 2017–2019-yillarda Oʼzbekiston
          Respublikasi Madaniyat vazirligi Iqtisodiy tahlil va moliya
          boshqarmasi boshligʼi oʼrinbosari, bosh buxgalter lavozimlarida
          ishlagan. Oʼzbekiston Respublikasi Аdliya vazirining 2019 yil 6
          martdagi 160-sht-son buyrugʼi bilan Toshkent davlat yuridik
          universiteti Ixtisoslashtirilgan filiali direktorining moliya-xoʼjalik
          ishlari boʼyicha oʼrinbosari lavozimiga tayinlangan. */}
        </p>
        <div className={style.containerButton2}>
          <Link to="/rahbariyat">
            <span>Batafsil...</span>
            <span>Batafsil...</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home3;
