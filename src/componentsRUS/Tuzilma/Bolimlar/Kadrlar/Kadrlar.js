import React from "react";
import style from "./Kadrlar.module.css";
import zarifa from "../../../../assets/img/zarifa.jpg";
import aziza from "../../../../assets/img/aziza.jpg";
import { Link } from "react-router-dom";

const Kadrlar = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.title}>
          <h2>Отдел кадров</h2>
        </div>
        <div className={style.users}>
          <div className={style.user}>
            <img src={zarifa} alt="zarifa" />
            <p>
              <strong>Боймуродова Зарифа Закировна</strong> – Отдел кадров
              Глава 8 декабря-Конституция Республики Узбекистан
              Узбекистан в связи с 28-летием со дня принятия
              Республики Узбекистан от 3 декабря 2020 года № 640
              награжден орденом "Знак Почета".
              <br />
              <span>
                {" "}
                <b>E-mail:</b> <Link>zari.1985@umail.uz</Link>{" "}
              </span>
            </p>
          </div>
          <div className={style.user}>
            <img src={aziza} alt="aziza" />
            <p>
              <strong>Абиджанова Азиза Бахрамджановна</strong> –Отдел кадров инспекторский
              <br />
              <span>
                {" "}
                <b>E-mail:</b>{" "}
                <Link to="azizaotdelkadrova@gmail.com">
                  azizaotdelkadrova@gmail.com
                </Link>{" "}
              </span>
            </p>
          </div>
        </div>

        <div className={style.title}>
          <h2>ФУНКЦИИ ОТДЕЛА КАДРОВ</h2>
        </div>
        <div className={style.paragraf}>
          <p>
          Основными задачами отдела кадров являются::
          </p>
          <ul>
            <li>организация работы на основе отраслевого законодательства;</li>
            <li>
            разработка должностных инструкций работников отдела,
            координация и методическое руководство работой по улучшению
            делать;
            </li>
            <li>
            составление планов работы отдела и обеспечение их исполнения;
            </li>
            <li>
            Постановление министра юстиции Республики Узбекистан от 24 марта 2020 года
            Органов юстиции, утвержденных приказом № 68-ум и
            положения о системе управления персоналом в учреждениях
            В органах и учреждениях юстиции, утвержденных главой 3
            к требованиям Положения о порядке работы с персоналом
            рекомендация сотрудников в соответствующий филиал, проведение конкурса,
            формирование кадрового резерва и прием на работу
            ознакомление сотрудников с внутренними локальными документами;
            </li>
            <li>
            По согласованию с директором филиала (на регулярной основе) 
            Министерство юстиции Республики Узбекистан
            подготовка предложений по рекомендации на уровни;
            </li>
            <li>
            показывая особый пример производительности труда
            о поощрении профессорско-преподавательского состава и персонала
            внесение предложений руководству;
            </li>
            <li>
            Трудовым кодексом и правилами внутреннего распорядка работников филиала и
            соблюдать трудовую дисциплину в соответствии с трудовым договором
            обеспечение;
            </li>
            <li>
            график отпусков профессорско-преподавательского состава и сотрудников
            комитет профсоюза по развитию и директору филиала
            утверждение по согласованию с
            </li>
            <li>
            прием на работу профессорско-преподавательского состава и других работников
            о предоставлении отпуска и направлении в командировку
            подготовка проектов приказов директора и
            оформление договоров
            </li>
            <li>
            предотвращение выгорания персонала, труд персонала
            и выявленных нарушений
            разработка предложений по устранению недостатков;
            </li>
            <li>
            диплом по обращениям юридических и физических лиц
            дубликата свидетельства в установленном порядке и их
            ведение отчетности;
            </li>
            <li>
            по расходам дипломов, выданных выпускникам
            ведение отчетности и в установленном порядке в соответствующие органы
            отправка данных
            </li>
            <li>
            прием документов, поступивших в отдел, производится с учетом
            Регистрация исходящих документов, приказов
            распространение в установленном порядке
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Kadrlar;
