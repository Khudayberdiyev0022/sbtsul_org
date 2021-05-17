import React from "react";
import style from "../../../components/Tuzilma/Rahbariyat/Baxtiyorovich.module.css";
import img from "../../../assets/img/xurozov.jpg";

const KaxramonovichRus = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        <div
          className={style.img}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div className={style.text}>
          <h2>Хурозов Зафар Кахрамонович</h2>
          <h4>Заместитель директора по финансово-экономическим вопросам</h4>
          <span></span>
          <p>
            <span></span> Заместитель директора по финансово-экономическим
            вопросам специализированного филиала Ташкентского государственного
            юридического университета. Хурозов Зафар Кахрамонович - родился 27
            апреля 1984 года в Самаркандской области. Образование высшее. В 2008
            году окончил Ташкентский государственный аграрный университет по
            специальности экономист. В 2017 году окончил Банковско-финансовую
            академию Республики Узбекистан по специальности «Управление
            государственными финансами». Хурозов Зафар участвовал в студенческих
            международных обменных программах и побывал в 2005 году в Швеции, в
            2006-2007 годах в Швейцарии, в 2016 году в Японии. Хурозов Зафар
            трудовую деятельность начал в 2008 году специалистом центрального
            планового отдела иностранного предприятия «Байтекс-Тикарет». В
            2009–2010 гг. - бухгалтер Учебного центра Министерства финансов
            Республики Узбекистан. В 2010-2012 гг. - главный бухгалтер
            Центрального государственного архива научно-технической и
            медицинской документации Республики Узбекистан. В 2012 г. -
            заместитель директора по учебной работе Ташкентского колледжа
            гостиничного менеджмента и сервиса. В 2012-2013 гг. - заместитель
            главного бухгалтера Ташкентского государственного технического
            университета. В 2013-2017 годах заведующий кафедрой финансов и
            экономики Ташкентского государственного юридического университета. В
            2017-2019 годах заместитель начальника департамента финансов и
            экономического анализа Министерства культуры Республики Узбекистан,
            а также работал в качестве главного бухгалтера. Хурозов Зафар 6
            марта 2019 года Приказом № 160 Министерства Юстиции Республики
            Узбекистан назначен заместителем директора по
            финансово-экономическим вопросам специализированного филиала
            Ташкентского государственного юридического университета.
          </p>
          <p>Принимает граждан по средам, с 10:00 до 12:00 часов</p>
          <p>
            <b>Телефон:</b> 233-66-36 (1110)
          </p>
          <p>
            {" "}
            <b>E-mail: </b> z.xurozov.@tsul.uz
          </p>
        </div>
      </div>
    </div>
  );
};

export default KaxramonovichRus;
