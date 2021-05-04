import React from "react";
import style from "./Jangovor1.module.css";
// import Rotate from "react-reveal/Rotate";

const Jangovor1 = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        {/* <Rotate bottom left cascade> */}
          <div className={style.head}>
            <h2>DEPARTMENT OF PROFESSIONAL FIGHTING SCIENCES</h2>
            <span></span>
            <p>
            Tashkent State Law University Specialized
               Branch Vocational Training Department Uzbekistan
               On February 7, 2019, the President of the Republic of Kazakhstan issued a decree “On offenses
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

export default Jangovor1;
