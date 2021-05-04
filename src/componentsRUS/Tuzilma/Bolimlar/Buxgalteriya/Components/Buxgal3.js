import React from "react";
import style from "./Buxgal3.module.css";
// import Fade from "react-reveal/Fade";
// import Zoom from "react-reveal/Zoom";

const Buxgal3 = () => {
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
              Современные технические средства и информационные технологии бухгалтерского учета
              организация, бюджетирование с использованием технологий
              средств, а также внебюджетных средств
              для определенных целей, предусмотренных в смете расходов,
              расходыinit aumination, денежные средства и материал
              осуществление систематического контроля за целостностью ценностей
              повышение квалификации преподавателей и сотрудников
              платы и приравненных к ней платежей, отчислений студентов
              в установленном порядке
              и их распространения, в установленном порядке
              взыскание дебиторской задолженности в установленные сроки и
              финансовой, налоговой и финансовой задолженности
              составление прочей отчетности, установленной законодательством и филиалом
              Предусмотренных уставом филиала и утвержденных директором филиала.
              загружено другое
              </p>
            </div>
          </div>
        {/* </Zoom> */}
      </div>
    </div>
  );
};

export default Buxgal3;
