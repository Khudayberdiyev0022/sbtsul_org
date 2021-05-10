import React from "react";
import style from "../../../components/Tuzilma/Direktorat/Direktorat.module.css";
import sultanovDR from "../../../assets/img/sultanovDR.jpg";
import nurxodjayevDR from "../../../assets/img/nurxodjayevDR.jpg";
import yusupovDR from "../../../assets/img/yusupovDR.jpg";
import { Link } from "react-router-dom";

const DirektoratRus = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.title}>
          <h2>Директорат</h2>
          <p>
          Специализированный филиал Ташкентского государственного юридического университета
 Директива Президента Республики Узбекистан от 2019 года
 “Профилактика правонарушений и общественное недовольство " от 7 февраля
 совершенствованию системы подготовки кадров в сфере обеспечения
 № ПП-4166”о дополнительных мерах по
 в соответствии с постановлением правительства Кыргызской Республики.{" "}
          </p>
        </div>
        <div className={style.users}>
          <div className={style.user}>
            <img src={sultanovDR} alt="sultanovDR" />
            <p>
              <strong>Султанов Мохаммад Аллайорович</strong> – Главный инженер, Юрист 3 ранга.
              <br />
              <span>
                {" "}
                <b>E-mail:</b>{" "}
                <Link to="muhammadsultanov190@gmail.com">
                  muhammadsultanov190@gmail.com
                </Link>{" "}
              </span>
            </p>
          </div>
          <div className={style.user}>
            <img src={nurxodjayevDR} alt="nurxodjayevDR" />
            <p>
              <strong> Нурходжаев Зохиддин Зиявиддинович </strong> –Главный инженер-энергетик.
              <br />
              <span>
                {" "}
                <b>E-mail:</b>{" "}
                <Link to="zoxiddin.94@gmail.com ">zoxiddin.94@gmail.com</Link>{" "}
              </span>
            </p>
          </div>
          <div className={style.user}>
            <img src={yusupovDR} alt="yusupovDR" />
            <p>
              <strong>Юсупов Кадиржон Кобилжонович </strong> – пресс-секретарь
              <br />
              <span>
                {" "}
                <b>E-mail:</b>{" "}
                <Link to="qodirjonyusupov25@gmail.com">
                  qodirjonyusupov25@gmail.com
                </Link>{" "}
              </span>
            </p>
          </div>
        </div>

        <div className={style.paragraf}>
          <h5>Должностные обязанности главного инженера:</h5>
          <ul>
            <li>
            Проведение переговоров по реконструкции, капитальному и текущему ремонту с имеющимися внутренними ресурсами филиала или с подрядными организациями;
            </li>
            <li>
            подготовка проектно-сметной документации по капитальному ремонту, включающей здание и план его эвакуации;
            </li>
            <li>
            Составление и подготовка перечня материалов по каждому объекту отдельно по материально-технической базе филиала;
            </li>
            <li>
            участие в решении вопросов по реконструкции существующих объектов и приспособлению к установке в зданиях дорогостоящего и громоздкого оборудования;
            </li>
            <li>
            осуществление контроля за техническим состоянием и оснащением зданий и своевременным их ремонтом;
            </li>
            <li>
            организация обучения структурных подразделений правилам безопасности труда;
            </li>
            <li>
            Своевременное представление отчетности по материально-технической базе филиала и использованию топливно-энергетических ресурсов;
            </li>
            <li>
            давать рекомендации по перепланировке сооружений и соблюдению правил эксплуатации;
            </li>
            <li>
            Внесение предложений по принятию мер в отношении лиц, причинивших ущерб имуществу филиала;
            </li>
            <li>
            Проведение мероприятий по подготовке ветки к осенне-зимнему периоду;
            </li>
            <li>
            Контролировать текущее состояние средств защиты на объектах и службах филиала, проверять состояние их исправности;
            </li>
            <li>
            осуществляет работу по оформлению заказов на необходимые материалы и оборудование, ведению учета материально-технических средств, хранящихся на складе.
            </li>
          </ul>
        </div>
        <div className={style.paragraf}>
          <h5>Должностные обязанности главного энергетика:</h5>
          <ul>
            <li>
            разработка мероприятий по энергосбережению, контроль за целевым распределением энергии между объектами отрасли;
            </li>
            <li>
            учет и анализ аварий в энергоснабжении и средств, пришедших в негодность;
            </li>
            <li>
            контроль за соблюдением подчиненным персоналом правил и инструкций в движении;            </li>
            <li>
            Ведение учета энергопотребления филиала, подготовка энергетического баланса филиала;
            </li>
            <li>
            оформление договоров на энергопотребление с соответствующими организациями;
            </li>
            <li>
            осуществление контроля за своевременным и качественным выполнением профилактических работ и ремонтом энергосистем, а также систем телефонной связи, радиоузлов, автоматизированных систем вызова и сигнализации и их техническим состоянием;
            </li>
            <li>
            разработка должностных инструкций по эксплуатации электро-и газового оборудования, вентиляционных установок и т.д. и подчиненного персонала;
            </li>
            <li>
            Мероприятия по подготовке ветки к осенне-зимнему периоду реализация;
            </li>
            <li>
            Контролировать текущее состояние средств защиты на объектах и службах филиала, проверять состояние их исправности;
            </li>
            <li>
            организация предварительных и регулярных проверок сопротивления изоляции энергетических систем и устройств;
            </li>
            <li>
            оформление заказов на необходимые материалы и оборудование, ведение учета материально-технических средств, хранящихся на складе;
            </li>
            <li>
            оформление заказов проектным организациям на ремонт и модернизацию энергообъектов и контроль за выполнением работ;
            </li>
            <li>
              instruksiya va qoidalarning buzilishidan kelib chiqqan qoidabuzarliklarga nisbatan chora ko‘rish uchun kerakli hujjatlarni rahbariyatga taqdim etish ishlarini amalga oshiradi.
            </li>
          </ul>
        </div>
        <div className={style.paragraf}>
          <h5>Основные обязанности пресс-секретаря:</h5>
          <ul>
            <li>
            Участие в формировании и реализации информационной политики, определяемой руководством филиала;
            </li>
            <li>
            Обеспечение эффективного и практического сотрудничества с информационной службой Министерства высшего и среднего специального образования и информационными службами государственных и общественных организаций по реализации единой государственной политики в информационной сфере;
            </li>
            <li>
            Объективное, качественное и оперативное информирование широкой общественности о деятельности филиала, нормативно-правовых актах в данной сфере, установление сотрудничества со средствами массовой информации, формирование круга журналистов, работающих в постоянном сотрудничестве, распространение информационных сообщений;
            </li>
            <li>
            Подготовка сообщений, информационно-справочных материалов, обзоров и информационно-аналитических материалов для публикации в национальных и зарубежных СМИ совместно с сотрудниками указанных отделов в составе филиала;
            </li>
            <li>
            Анализ состояния общественного мнения и позиции СМИ относительно деятельности филиала и информирование о них директора Института;
            </li>
            <li>
            Осуществляет работу по формированию и ведению базы данных текстовых, фото -, аудио-и видеоматериалов, относящихся к сфере деятельности филиала.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DirektoratRus;
