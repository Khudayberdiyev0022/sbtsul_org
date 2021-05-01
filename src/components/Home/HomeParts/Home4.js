import React from "react";
import style from "./Home4.module.css";
import Countup from "react-countup";

const Home4 = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.staticBlock}>
          <div className={style.card1}>
            <div className={style.staticBox}>
              <p>TDYU Ixtisoslashtirilgan filiali tashkil topgan</p>
              <Countup
                start={1991}
                end={2019}
                duration={15}
                suffix="yil"
                className={style.countText}
              ></Countup>
            </div>
            <div className={style.staticBoxBg}>
              <p>TDYU Ixtisoslashtirilgan filiali tashkil topgan</p>
              <Countup
                start={1991}
                end={2019}
                duration={15}
                suffix="yil"
                className={style.countText}
              ></Countup>
            </div>
          </div>
          <div className={style.card1}>
            <div className={style.staticBox}>
              <p>
                TDYU Ixtisoslashtirilgan filiali Professor-o'qituvchilari soni
              </p>
              <Countup
                end={39}
                duration={15}
                separator=","
                suffix="ta"
                className={style.countText}
              ></Countup>
            </div>
            <div className={style.staticBoxBg}>
              <p>
                TDYU Ixtisoslashtirilgan filiali Professor-o'qituvchilari soni
              </p>
              <Countup
                end={39}
                duration={15}
                separator=","
                suffix="ta"
                className={style.countText}
              ></Countup>
            </div>
          </div>
          <div className={style.card1}>
            <div className={style.staticBox}>
              <p>TDYU Ixtisoslashtirilgan filialida talabalar soni</p>
              <Countup
                end={572}
                duration={15}
                separator=","
                suffix="ta"
                className={style.countText}
              ></Countup>
            </div>
            <div className={style.staticBoxBg}>
              <p>TDYU Ixtisoslashtirilgan filialida talabalar soni</p>
              <Countup
                end={572}
                duration={15}
                separator=","
                suffix="ta"
                className={style.countText}
              ></Countup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home4;
