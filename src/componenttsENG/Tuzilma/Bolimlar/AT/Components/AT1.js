import React from "react";
import style from "./AT1.module.css";
// import Rotate from "react-reveal/Rotate";

const AT1 = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        {/* <Rotate bottom left cascade> */}
          <div className={style.head}>
            <h2>DEPARTMENT OF INFORMATION TECHNOLOGIES</h2>
            <span></span>
            <p>
            Tashkent State Law University Specialized
               Information Technology Department of the Republic of Uzbekistan
               On February 7, 2019, the President issued a decree “Offenses
               personnel in the field of prevention and public safety
               in addition to improving the training system
               in accordance with the Resolution No. PQ-4166 "On measures"
               established.
            </p>
          </div>
        {/* </Rotate> */}
      </div>
    </div>
  );
};

export default AT1;
