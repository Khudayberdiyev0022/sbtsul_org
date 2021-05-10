import React from "react";
import style from "../../../../../components/Tuzilma/Kafedralar/Jangovor/Components/Jangovor4.module.css";
import img1 from "../../../../../assets/img/ou1.jpg";
import img2 from "../../../../../assets/img/ou2.jpg";
// import Bounce from "react-reveal/Bounce";

const Jangovor4 = () => {
  return (
    <div className={style.main}>
      {/* <Bounce top cascade> */}
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
                В рамках учебно-методической деятельности Ф. Дусумходжаев и Х. Ожидается издание учебных пособий Ахмедовых (“огневая подготовка”, “огневая подготовка”, “основы самбо”). Кроме того, до конца 2020/2021 года планируется подготовить и издать 1 учебник, 2 учебных пособия и 4 учебно-методических пособия;
                </p>
              </div>
            </div>
            <div className={style.text}>
              <p>
              Разработаны соответствующие учебные программы и планы по учебной работе, проводятся запланированные лекционные и практические занятия. В настоящее время налажено плодотворное сотрудничество в этом направлении с министерствами внутренних дел, обороны и Национальной гвардии, а также с высшими учебными заведениями, в которых проводятся мастер-классы, практические занятия, выставки, встречи и круглые столы;
              </p>
            </div>
            <div className={style.flex2}>
              <div className={style.text1}>
                <p>
                Для эффективной организации физкультурно-спортивных занятий имеются все необходимые сооружения и объекты, в том числе предназначенные для различных видов спорта и гимнастические площадки, в кратчайшие сроки созданы соответствующие условия, приобретены спортивный инвентарь и инструменты.
                </p>
              </div>
              <div
                className={style.img}
                style={{ backgroundImage: `url(${img2})` }}
              ></div>
            </div>
          </div>
        </div>
      {/* </Bounce> */}
    </div>
  );
};

export default Jangovor4;
