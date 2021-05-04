import React from "react";
import style from "./Moliya3.module.css";
// import Fade from "react-reveal/Fade";
// import Zoom from "react-reveal/Zoom";

const Moliya3 = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        {/* <Fade top cascade> */}
          <div className={style.head}>
            <h2>ЗАДАЧИ ОТДЕЛА</h2>
            <span></span>
          </div>
        {/* </Fade> */}
        {/* <Zoom top cascade> */}
          <div className={style.grid}>
            <div className={style.block}>
              <div className={style.svg}>{/* <VscOrganization/> */}</div>
              <p>
                <li>
                Дальнейшее укрепление финансово-экономического положения филиала,
                строгое соблюдение бюджетной дисциплины, финансово-экономический
                плановое ведение бюджетной и внебюджетной деятельности
                эффективность целевого использования средств
                организация повышения;
                </li>
              </p>
              <p>
                <li>
                Штатное расписание, смета расходов сотрудников филиала
                разработка, внесение изменений и дополнений
                выполнение работ;
                </li>
              </p>
              <p>
                <li>
                из средств, указанных в смете расходов на собственные цели
                правильное использование на ходу, неуместно или излишне
                взять под контроль недопущения;
                </li>
              </p>
              <p>
                <li>
                работы, связанные с предоставлением работникам надбавок реализация;
                </li>
              </p>
              <p>
                <li>
                постоянно появляются новости, происходящие
 с финансово-экономическими показателями руководство
 своевременное введение;
                </li>
              </p>
              <p>
                <li>
                всем финансово-экономическим организациям
 своевременная подготовка и представление отчетов;
                </li>
              </p>
              <p>
                <li>
                Товары, которые необходимо приобрести для деятельности филиала,
 госзакупки работ и услуг специальная торгово-информационная
 обеспечение и контроль за размещением на портале госуслуг;
                </li>
              </p>
              <p>
                <li>
                предусмотренных законодательством и Уставом филиала, а также
 Другие обязанности, возложенные на директора филиала
 выполнение.
                </li>
              </p>
            </div>
          </div>
        {/* </Zoom> */}
      </div>
    </div>
  );
};

export default Moliya3;