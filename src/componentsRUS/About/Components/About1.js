import React from "react";
import style from "./About1.module.css";
import doc from "../../Data/МАЪЛУМОТ_матбуот_анжуманига_тўлиқ.doc";
import bg from "../../../assets/img/about.jpg";
// import Rotate from "react-reveal/Rotate";
import { BsCloudDownload } from "react-icons/bs";

const About1 = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        <div className={style.flex}>
          <div
            className={style.img}
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
            <div className={style.text}>
              <h3>Команда филиала</h3>
              <p>
                <span></span> Курс переподготовки филиалов
                29 человек в час на обучение
                в системе правоохранительных органов и Ташкента
                работает в Государственном юридическом университете
                профессора и преподаватели задействованы
              </p>
              <p>
                <span></span>Профессора и преподаватели в основном составе 4
                в системе Генеральной прокуратуры Республики Узбекистан, 2
                2 в МВД, 2 в Минобороны
                в системе министерства 2 из них работают в системе национальной гвардии
                из которых 1 - текущий персонал системы
                действует в Филиале, входит в резерв.
              </p>
              <p>
                <span></span>3 руководящего и управленческого персонала - наука
                имеет степень доктора философии. 1 из управленческого персонала
                В системе МВД 1 в системе прокуратуры
                был включен в существующий кадровый резерв
                работает в Филиале.
              </p>
              <p>
                <span></span>Министерству юстиции Республики Узбекистан
                рекомендации сотрудников к определенным должностям и уровням карьеры
                принадлежит министру юстиции на 2019-2020 годы
                18 человек работают в Филиале на основании заказов
                сотруднику присвоены специальные звания служебных званий, 14 человек
                титулы, полученные в результате предыдущей работы в судебной системе
                приравнивается к уровню карьеры.
              </p>
              <p>
                <span></span>Особый пример продуктивности
                профессорско-преподавательский состав и персонал
                В целях поощрения 1 сотрудника Минюста
                Знак «Отличник правосудия», 6 профессоров и преподавателей.
                и штатная «Почетная грамота» министра юстиции - 13 человек.
                Профессора и сотрудники Филиала «Почетный
                был награжден «лейблом».
              </p>
              <div className={style.footer}>
                <p>
                Для информации о специализированном отделении ТГЮУ
                  щелкните ссылку ниже.
                  <span className={style.btn}>
                    <a href={doc} rel="noreferrer" download>
                     Загрузите файл в формате pdf
                      <BsCloudDownload />
                    </a>
                  </span>
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About1;
