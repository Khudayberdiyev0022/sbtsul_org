import React from "react";
import style from "../../../../../components/Tuzilma/Kafedralar/Jangovor/Components/Jangovor4.module.css";
import img1 from "../../../../../assets/img/ou1.jpg";
import img2 from "../../../../../assets/img/ou2.jpg";

const Jangovor4 = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        <h2>УЧЕБНАЯ И УЧЕБНО-МЕТОДИЧЕСКАЯ РАБОТА</h2>
        <span></span>
        <div className={style.column}>
          <div className={style.flex}>
            <div
              className={style.img}
              style={{ backgroundImage: `url(${img1})` }}
            ></div>
            <div className={style.text1}>
              <p>
                Учебная и учебно-методическая работа организована на должном
                уровне. В рамках образовательной деятельности преподавателями
                кафедры Ф. Досумходжаеввым и Х. Ахмедовым разработаны и изданы
                учебные пособия («Огневая подготовка», «Основы самбо»). Кроме
                того, до конца 2020/2021 года планируется подготовить и издать 1
                учебник, 2 учебных пособия и 4 учебно-методических пособия
              </p>
            </div>
          </div>
          <div className={style.text}>
            <p>
              Учебно-воспитательный процесс организован согласно утвержденных
              учебных планов и программ путем проведения лекций и семинаров. В
              настоящее время налажено эффективное сотрудничество в сфере
              образования с воинскими частями и вузами министерств внутренних
              дел, обороны, Национальной гвардии, с участием их специалистов
              организовываются различные «мастер-классы», семинары,
              показательные занятия, встречи и круглые столы.
            </p>
          </div>
          <div className={style.flex2}>
            <div className={style.text1}>
              <p>
                Для эффективной организации занятий по физической культуре и
                спорту созданы необходимые условия, в том числе соответствующая
                учебно-методическая база, приобретено надлежащее спортивное
                оборудование и имущество.
              </p>
            </div>
            <div
              className={style.img}
              style={{ backgroundImage: `url(${img2})` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jangovor4;
