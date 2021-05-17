import React from "react";
import style from "../../../../../components/Tuzilma/Kafedralar/JinoyatHuquq/Components/Jinoyat4.module.css";
import img1 from "../../../../../assets/img/oquvvv1.jpg";

const JInoyat4 = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        <h2>EDUCATIONAL AND EDUCATIONAL WORKS</h2>
        <span></span>
        <div className={style.column}>
          <div className={style.flex}>
            <div
              className={style.img}
              style={{ backgroundImage: `url(${img1})` }}
            ></div>
            <div className={style.text1}>
              <p>
                Textbooks published as part of educational activities - 2
                including A. Zakrullaev's co-authorship “Crime procedural law
                ”and“ Criminal executive law ”textbooks were published given
                Published textbooks - 1, including Co-authored by S. Ochilov,
                “Court and law enforcement bodies. ”
              </p>
            </div>
          </div>
          <div className={style.text}>
            <p>
              Criminal Procedure Law ”from the module“ In Criminal Procedure
              evidence ”,“ Proof in criminal proceedings ”,“ Offenses Prevention
              activities ”from the training module“ Offenses Preparation and
              publication of textbooks "Prevention" on the eve of maturity. {""}
            </p>
          </div>
          <div className={style.text}>
            <p>
              develop appropriate curricula and study plans giving lectures and
              workshops is coming. Currently, the Ministry of Internal Affairs,
              Ministries of Defense and the National Guard military unit and
              higher effective cooperation with educational institutions. Master
              classes, workshops, exhibitions, meetings and roundtables are also
              being organized;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JInoyat4;
