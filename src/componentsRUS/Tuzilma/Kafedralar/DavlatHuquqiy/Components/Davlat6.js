import React from "react";
import style from "../../../../../components/Tuzilma/Kafedralar/DavlatHuquqiy/Components/Davlat6.module.css";
import bg from "../../../../../assets/img/section_bg04.jpg";
import img from "../../../../../assets/img/manaviy12.jpg";

const Davlat6 = () => {
  return (
    <div className={style.main} style={{ backgroundImage: `url(${bg})` }}>
      <div className={style.inMain}>
        <h2>ДУХОВНО-ПРОСВЕТИТЕЛЬСКАЯ И ВОСПИТАТЕЛЬНО-НРАВСТВЕННАЯ РАБОТА</h2>
        <span></span>
        <div className={style.text}>
          <div
            className={style.img}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
          <p>
            <span></span>Профессорско-преподавательский состав кафедры
            государственного права регулярно проводит со студентами круглые
            столы и различные встречи. Профессорско-преподавательский состав
            кафедры совместно с отделом воспитательной работы в целях
            организации досуга студентов в рамках кураторских групп организует
            посещение студентами различных театров, музеев и парков.
          </p>
        </div>
        <p>
          <span></span> Кроме того, профессорско-преподавательский состав
          кафедры в целях повышения правосознания и правовой культуры населения,
          постоянно высказывая свое мнение в средствах массовой информации,
          проводит духовно-просветительскую работу и дает мотивированные ответы
          на вопросы граждан по проблемным вопросам.
        </p>
      </div>
    </div>
  );
};

export default Davlat6;
