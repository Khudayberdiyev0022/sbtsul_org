import React from "react";
import style from "../../../../components/Tuzilma/Bolimlar/Direktorat/Direktorat.module.css";
import sultanovDR from "../../../../assets/img/sultanovDR.jpg";
import nurxodjayevDR from "../../../../assets/img/nurxodjayevDR.jpg";
import yusupovDR from "../../../../assets/img/yusupovDR.jpg";
import { Link } from "react-router-dom";

const DirektoratRus = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.title}>
          <h2>Директорат</h2>
          <p>
            Специализированный филиал Ташкентского государственного юридического
            университета Директива Президента Республики Узбекистан от 2019 года
            “Профилактика правонарушений и общественное недовольство " от 7
            февраля совершенствованию системы подготовки кадров в сфере
            обеспечения № ПП-4166”о дополнительных мерах по в соответствии с
            постановлением правительства Кыргызской Республики.{" "}
          </p>
        </div>
        <div className={style.users}>
          <div className={style.user}>
            <img src={sultanovDR} alt="sultanovDR" />
            <p>
              <strong>Султанов Мохаммад Аллайорович</strong> – Главный инженер,
              Юрист 3 ранга.
              <br />
              <span>
                {" "}
                <b>E-mail:</b>{" "}
                <a
                  href="mailto:info@sbtsul.uz"
                  rel="noreferrer"
                  target="_blank"
                >
                  info@sbtsul.uz
                </a>
                <a
                  href="mailto:muhammadsultanov190@gmail.com"
                  ref="noreferrer"
                  target="__blank"
                >
                  muhammadsultanov190@gmail.com
                </a>{" "}
              </span>
            </p>
          </div>
          <div className={style.user}>
            <img src={nurxodjayevDR} alt="nurxodjayevDR" />
            <p>
              <strong> Нурходжаев Зиявиддин Зиявиддинович</strong> – bosh
              energetik.
              <br />
              <span>
                {" "}
                <b>E-mail:</b>{" "}
                <a
                  href="mailto:zoxiddin.94@gmail.com "
                  rel="noreferrer"
                  target="_blank"
                >
                  zoxiddin.94@gmail.com
                </a>{" "}
              </span>
            </p>
          </div>
          <div className={style.user}>
            <img src={yusupovDR} alt="yusupovDR" />
            <p>
              <strong>Юсупов Кадиржон Кобилжон угли</strong> – пресса секретарь
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
              Имеющиеся внутренние ресурсы филиала или подрядных организаций по
              реконструкции, капитальному и текущему ремонту вести переговоры;
            </li>
            <li>
              проектно-сметную документацию по капитальному ремонту, в том числе
              подготовка здания и плана его эвакуации;
            </li>
            <li>
              По каждому объекту материально-технической базы филиала
              составление и подготовка списка отдельных материалов;
            </li>
            <li>
              дорогостоящий и громоздкий ремонт существующих объектов по
              приспособлению оборудования к установке в помещениях участие в
              решении вопросов;
            </li>
            <li>
              техническое состояние и оснащение зданий и своевременное
              осуществление контроля за ремонтом;
            </li>
            <li>
              структурным подразделениям по правилам безопасности труда
              организация обучения;
            </li>
            <li>
              Материально-техническая база и топливно-энергетическая база
              филиала своевременное предоставление отчетов об использовании
              ресурсов глагол;
            </li>
            <li>
              перепланировка и эксплуатация объектов давать рекомендации по
              соблюдению правил;
            </li>
            <li>
              Меры в отношении лиц, причинивших ущерб имуществу филиала давать
              предложения по просмотру;
            </li>
            <li>
              Мероприятия по подготовке ветки к осенне-зимнему периоду
              реализация;
            </li>
            <li>
              Наличие средств защиты на объектах и услугах филиала проверить
              состояние, проверить состояние их годности идти;
            </li>
            <li>
              заказы на необходимые материалы и оборудование оформление,
              материально-технические средства, находящиеся на складе
              осуществляет работу по ведению бухгалтерского учета.
            </li>
          </ul>
        </div>
        <div className={style.paragraf}>
          <h5>Должностные обязанности главного энергетика:</h5>
          <ul>
            <li>
              разработка мер по энергосбережению выход, целевое распределение
              энергии между объектами ветки контроль распределения;
            </li>
            <li>
              аварии на энергоснабжении и приведение в негодность учет и анализ
              поступающих средств;
            </li>
            <li>
              правила в действии подчиненным персоналом и контроль за
              соблюдением инструкций;
            </li>
            <li>
              Ведение учета энергопотребления филиала, Подготовка
              энергетического баланса филиала;
            </li>
            <li>
              tegishli tashkilotlar bilan energiya iste’moli bo‘yicha
              shartnomalar rasmiylashtirish;
            </li>
            <li>
              энергетика, а также телефонная связь, радиоузел,
              автоматизированные звонки и сигнализация профилактических работ и
              ремонта систем жизнеобеспечения своевременное и качественное
              выполнение работ и их техническое состояние осуществление контроля
              за;
            </li>
            <li>
              электрическое и газовое оборудование, вентиляционные устройства и
              т. д и подчиненного персонала разработка должностной инструкции;
            </li>
            <li>
              Мероприятия по подготовке ветки к осенне-зимнему периоду
              реализация;
            </li>
            <li>
              Наличие средств защиты на объектах и услугах филиала проверить
              состояние, проверить состояние их годности идти;
            </li>
            <li>
              начальные значения сопротивления изоляции энергетических систем и
              устройств и организовать регулярные проверки;
            </li>
            <li>
              заказы на необходимые материалы и оборудование оформление,
              материально-технические средства, находящиеся на складе ведение
              бухгалтерского учета;
            </li>
            <li>
              проведение реконструкции и модернизации энергообъектов оформление
              заказов проектным организациям и выполнение работ контроль
              исполнения;
            </li>
            <li>
              из-за нарушения инструкций и правил необходимые для принятия мер в
              отношении нарушений осуществляет работу по представлению
              документов руководству.
            </li>
          </ul>
        </div>
        <div className={style.paragraf}>
          <h5>Основные обязанности пресс-секретаря:</h5>
          <ul>
            <li>
              Информационной политики, определяемой руководством филиала.
              участие в формировании и реализации;
            </li>
            <li>
              Реализация единой государственной политики в информационной сфере
              Министерство высшего и среднего специального образования с
              информационными службами государственных и общественных
              организаций обеспечение эффективного и практического
              сотрудничества;
            </li>
            <li>
              Информирование широкой общественности о деятельности филиала,
              нормативно-правовых объективное, качественное и оперативное
              информирование о документах, налаживание сотрудничества со
              средствами массовой информации, постоянный формирование круга
              журналистов, работающих совместно, распространение информационных
              сообщений;
            </li>
            <li>
              С сотрудниками определенных отделов в структуре филиала сообщение
              для совместного объявления в национальных и зарубежных СМИ,
              информационно-справочные материалы, обзоры и
              информационно-аналитические материалы подготовка материала;
            </li>
            <li>
              О состоянии общественного мнения в отношении деятельности филиала
              Анализ позиции СМИ и информации о них. предоставление информации
              директору;
            </li>
            <li>
              Текстовые, фото, аудио и видео, относящиеся к сфере деятельности
              филиала формирование и ведение базы данных материалов выполняет
              свою работу.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DirektoratRus;
