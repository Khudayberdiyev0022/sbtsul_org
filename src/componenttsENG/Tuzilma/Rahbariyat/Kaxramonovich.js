import React from "react";
import style from "../../../components/Tuzilma/Rahbariyat/Baxtiyorovich.module.css";
import img from "../../../assets/img/xurozov.jpg";
// import Zoom from "react-reveal/Zoom";

const KaxramonovichEng = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        <div
          className={style.img}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        {/* <Zoom top cascade> */}
          <div className={style.text}>
            <h2>Khurozov Zafar Kaxramonovich</h2>
            <h4>Deputy Director for Finance and Economics</h4>
            <span></span>
            <p>
              <span></span> Tashkent State Law University
              Financial and economic affairs of the director of the specialized branch
              Deputy Khurozov Zafar Kahramanovich - 1984
              He was born on April 27 in Samarkand region. Higher education.
              In 2008 he graduated from Tashkent State Agrarian University with a degree in Economics.
              completed his studies. In 2017, the Republic of Uzbekistan
              "Public Finance Management" of the Banking and Finance Academy
              He graduated with a master's degree in his specialty. It was 2005
              Sweden, 2006-2007 Switzerland and 2016 Japan
              listener of international student exchange programs in the countries
              returned. He started his career in 2008 at Bayteks-Ticaret.
              Specialist of the Central Planning Department of a foreign enterprise
              started his career. 2009–2010 Republic of Uzbekistan
              Accountant of the Training Center of the Ministry of Finance, 2010-2012
              Scientific, technical and medical documents of the Republic of Uzbekistan
              Chief Accountant of the Central State Archive, 2012 Tashkent
              Educational work of the professional college of hotel management and service
              Deputy Director for Tashkent, 2012-2013 Tashkent State University
              Deputy Chief Accountant of the Technical University, 2013-2017
              Tashkent State Law University Finance and Economics
              Head of the Department, 2017–2019, Republic of Uzbekistan
              Department of Economic Analysis and Finance of the Ministry of Culture
              He worked as a deputy chief and chief accountant.
              Minister of Justice of the Republic of Uzbekistan March 6, 2019
              Tashkent State Law University by order No. 160
              Financial and economic affairs of the director of the specialized branch
              appointed Deputy Minister of Foreign Affairs.
            </p>
          </div>
        {/* </Zoom> */}
      </div>
    </div>
  );
};

export default KaxramonovichEng;
