import React from "react";
import { Link } from "react-router-dom";
import style from "./Home3.module.css";

const Home3 = () => {
  return (
    <div className={style.main}>
      <div className={style.skewedBox}>
        <div className={style.container}>
          <div className={style.rahbariyatLink}>
            <Link to="/rahbariyat">Руководство</Link>
          </div>
          <h2>Джураев Ихтиёр Бахтиёрович</h2>
          <p className={style.rektor}>
            Заместитель директора по учебной работе
          </p>
          <p>
            Специализированный филиал Ташкентского государственного юридического
            университета Заместитель директора по воспитательной работе. Джураев
            Ихтиёр Бахтиёрович - 25 ноября 1980 года в Кашкадарьинской области,
            Он родился в Касбинском районе. Образование - высшее, юрист,
            юридический. кандидат наук. 2002 Ташкентский Государственный
            Юридический Институт бакалавриат, 2007 магистр. Джураев Ихтиёр начал
            свою карьеру в 2002 году в Кашкадарьинской области. С должности
            преподавателя Ковчинского профессионального училища Каршинского
            района. С 2003 по 2005 годы учился в Ташкентском государственном
            юридическом институте. Старший инспектор отдела, 2007–2012 гг.
            Ташкентского государственного права Институт судебной и
            правоохранительной деятельности
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
              <span>Подробнее...</span>
              <span>Подробнее...</span>
            </Link>
          </div>
        </div>
      </div>
      <div className={style.sec2}>
        <h2>Хурозов Зафар Кахрамонович</h2>
        <p className={style.rektor}>
          Заместитель директора по финансам и экономике
        </p>
        <p>
          Специализированный филиал Ташкентского государственного юридического
          университета Заместитель директора по финансово-экономическим вопросам
          Хурозов Зафар Кахраманович - 27 апреля 1984 г., Самаркандская область.
          родившийся Высшее образование. В 2008 году Ташкентский государственный
          аграрный университет. Окончил университет по специальности
          «Экономист». В 2017 г. Академии банковского дела и финансов Республики
          Узбекистан «Государственный Окончил магистратуру по специальности
          «Финансовый менеджмент». ОНА Швеция в 2005 году, Швейцария в 2006-2007
          годах и Япония в 2016 году. Он слушает программы международного
          студенческого обмена во многих странах.
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
        <div className={style.containerButton}>
          <Link to="/rahbariyat">
            <span>Подробнее...</span>
            <span>Подробнее...</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home3;
