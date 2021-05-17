import React from "react";
import style from "../../../../../components/Tuzilma/Kafedralar/DavlatHuquqiy/Components/Davlat4.module.css";
import img1 from "../../../../../assets/img/oquv111.jpg";

const Davlat4 = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        <h2>УЧЕБНО-МЕТОДИЧЕСКАЯ РАБОТА</h2>
        <span></span>
        <div className={style.column}>
          <div className={style.flex}>
            <div
              className={style.img}
              style={{ backgroundImage: `url(${img1})` }}
            ></div>
            <div className={style.text1}>
              <p>
                В рамках учебно-методической деятельности на сегодняшний день
                издан ряд учебных и учебно-методических пособий. В частности,
                профессорско-преподавательским составом кафедры подготовлены и
                изданы учебные пособия “общие вопросы теории государства и
                права”, “Общие вопросы теории государства и права”,
                “конституционное право”, “Конституционное право”, “судебные и
                правоохранительные органы”. Кроме того, до конца 2020/2021
                учебного года планируется подготовить 1 учебник и 2 учебных
                пособия;{" "}
              </p>
            </div>
          </div>
          <div className={style.text}>
            <p>
              Разработаны соответствующие учебные программы и планы по учебной
              работе, проводятся запланированные лекционные и практические
              занятия. В настоящее время профессорско-преподавательским составом
              кафедры проводится ряд системных работ в этом направлении.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Davlat4;
