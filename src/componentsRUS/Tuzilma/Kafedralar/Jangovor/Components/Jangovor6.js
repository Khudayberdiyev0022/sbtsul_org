import React from "react";
import style from "./Jangovor6.module.css";
import bg from "../../../../../assets/img/section_bg04.jpg";
import img from "../../../../../assets/img/mm1.jpg";
// import Bounce from "react-reveal/Bounce";

const Jangovor6 = () => {
  return (
    <div className={style.main} style={{ backgroundImage: `url(${bg})` }}>
      {/* <Bounce top cascade> */}
        <div className={style.inMain}>
          <h2>ДУХОВНО-ПРОСВЕТИТЕЛЬСКАЯ И ВОСПИТАТЕЛЬНО-НРАВСТВЕННАЯ РАБОТА</h2>
          <span></span>
          <div className={style.text}>
            <div
              className={style.img}
              style={{ backgroundImage: `url(${img})` }}
            ></div>
            <p>
              <span></span> Профессорско-преподавательский состав кафедры” профессионально-боевая подготовка " организует беседы и встречи со студентами. Ежегодно преподаватели кафедры совместно со студентами организуют посещение Центрального музея Вооруженных сил Республики Узбекистан, парка Победы и различных мест, а также встречи с военными ветеранами.
            </p>
          </div>
          <p>
            <span></span> Создан спортивный клуб физической культуры и спорта, в рамках которого на сегодняшний день функционируют кружки по видам спорта “ММА”, “самбо” и “мини-футбол”. В настоящее время ведется работа по организации деятельности кружков по видам спорта” Бадминтон“,” Баскетбол". Подписаны меморандумы о сотрудничестве с федерациями самбо и легкой атлетики Узбекистана.
          </p>
          <p>
            <span></span> В филиале есть студенты, достигшие высоких результатов, в том числе двукратные призеры чемпионата мира по борьбе на поясах (Татарстан и Казахстан – 2019).Двукратный чемпион мира по самбо (Узбекистан, Германия). Кроме того, в республике более 10 студентов, которые достигли высоких результатов в таких видах спорта, как джиу-джитсу, рукопашный бой, вольная борьба и греко-римская борьба. В настоящее время среди студентов проводится квалификационная (селекционная) работа по различным другим видам спорта. В будущем планируется участие наших студентов в Универсиаде от имени функционирующего в филиале спортивного клуба, а также участие в республиканских и международных соревнованиях.
          </p>
        </div>
      {/* </Bounce> */}
    </div>
  );
};

export default Jangovor6;
