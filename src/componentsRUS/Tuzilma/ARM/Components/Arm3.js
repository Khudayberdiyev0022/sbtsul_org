import React from "react";
import style from "./Arm3.module.css";
// import Fade from "react-reveal/Fade";
// import Zoom from "react-reveal/Zoom";

const Arm3 = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        {/* <Fade top cascade> */}
          <div className={style.head}>
            <h2>ФУНКЦИИ ЦЕНТРА</h2>
            <span></span>
          </div>
        {/* </Fade> */}
        {/* <Zoom top cascade> */}
          <div className={style.grid}>
            <div className={style.block}>
              <div className={style.svg}>{/* <VscOrganization/> */}</div>
              <p>
                <span></span>
                Информационно-ресурсный центр осуществляет свою деятельность в
                Республики Узбекистан от 13 апреля 2011 года
                принят закон “о библиотечно-информационной деятельности
                Закон", Указ Президента Республики Узбекистан от 20 июня 2006 года
                ПК-381 «обеспечение населения Республики информационно-библиотечным
                Республики Узбекистан», постановление Верховного Совета Республики Узбекистан
                и Министерства среднего специального образования от 29 декабря 2006 г.
                295-действуют кровавые порядки и другие документы.
              </p>
              <p>
                <span></span>
                Информационно-библиотечный фонд филиал направление” Юриспруденция"
                по согласованию с кафедрами и учебным отделом,
                пожертвованные ресурсы, подписка на периодические издания
                развития высшего и среднего специального образования
                центра, издательств, фирм, высших учебных заведений
                и постоянно за счет публикаций, полученных от других организаций
                заполняется автоматически. Информационно-ресурсный центр закон
                указанных в уставе филиала и предусмотренных Уставом филиала
                и других обязанностей, возложенных директором филиала
                Н.
              </p>
            </div>
          </div>
        {/* </Zoom> */}
      </div>
    </div>
  );
};

export default Arm3;