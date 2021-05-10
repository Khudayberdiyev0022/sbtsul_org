import React from "react";
import style from "../../../../../components/Tuzilma/Kafedralar/JinoyatHuquq/Components/Jinoyat6.module.css";
import bg from "../../../../../assets/img/section_bg04.jpg";
import img from "../../../../../assets/img/manav121.jpg";
// import Bounce from "react-reveal/Bounce";

const JInoyat6 = () => {
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
              <span></span> Профессорско-преподавательский состав кафедры” уголовно-правовые науки " организует беседы и встречи со студентами. Профессорско-преподавательский состав кафедры совместно со студентами посетили Парк Победы, Республиканский научно-практический центр судебно-медицинской экспертизы, М. Были организованы визиты в расположенный в Улугбекском районе МФО “Эулабад” и махаллинский центр правопорядка, Юнусабадский районный суд по уголовным делам, процесс по уголовным делам и ряд других встреч.
            </p>
          </div>
        </div>
      {/* </Bounce> */}
    </div>
  );
};

export default JInoyat6;
