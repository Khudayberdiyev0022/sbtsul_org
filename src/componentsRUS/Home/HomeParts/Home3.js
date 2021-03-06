import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "../../../components/Home/HomeParts/Home3.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Home3 = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className={style.main} data-aos="fade-up-right">
      <div className={style.skewedBox}>
        <div className={style.container}>
          <div
            className={style.rahbariyatLink}
            data-aos="fade-down"
            data-aos-easing="linear"
          >
            <Link to="/rus/rahbariyat">Руководство</Link>
          </div>
          <h2>Джураев Ихтиёр Бахтиёрович</h2>
          <p className={style.rektor}>
            Заместитель директора по учебно-воспитательной работе
          </p>
          <p>
            Заместитель директора по учебно-воспитательной работе
            Специализированного филиала Ташкентского государственного
            юридического университета. Джураев Ихтиёр Бахтиёрович - родился 25
            ноября 1980 года в Касбиском районе Кашкадарьинской области.
            Образование - высшее, юрист, кандидат юридических наук, в 2002 году
            окончил бакалавриат, в 2007 году магистратуру Ташкентского
            государственного юридического института. Джураев Ихтиёр начал
            трудовую деятельность в 2002 году преподавателем в Ковчинском
            профессиональном колледже Каршинского района Кашкадарьинской
            области, в 2003–2005 годах старший инспектор учебного отдела
            Ташкентского государственного юридического института, в 2007–2012
            годах преподаватель кафедры...
          </p>
          <div className={style.containerButton}>
            <Link to="/rus/rahbariyat">
              <span>Подробнее...</span>
              <span>Подробнее...</span>
            </Link>
          </div>
        </div>
      </div>
      <div className={style.sec2} data-aos="fade-up-left">
        <h2>Хурозов Зафар Кахрамонович</h2>
        <p className={style.rektor}>
          Заместитель директора по финансово-экономическим вопросам
        </p>
        <p>
          Заместитель директора по финансово-экономическим вопросам
          специализированного филиала Ташкентского государственного юридического
          университета. Хурозов Зафар Кахрамонович - родился 27 апреля 1984 года
          в Самаркандской области. Образование высшее. В 2008 году окончил
          Ташкентский государственный аграрный университет по специальности
          экономист. В 2017 году окончил Банковско-финансовую академию
          Республики Узбекистан по специальности «Управление государственными
          финансами». Хурозов Зафар участвовал в студенческих международных
          обменных программах и побывал в 2005 году в Швеции, в 2006-2007 годах
          в Швейцарии, в 2016 году в Японии. Хурозов Зафар трудовую деятельность
          начал в...
        </p>
        <div className={style.containerButton}>
          <Link to="/rus/rahbariyat">
            <span>Подробнее...</span>
            <span>Подробнее...</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home3;
