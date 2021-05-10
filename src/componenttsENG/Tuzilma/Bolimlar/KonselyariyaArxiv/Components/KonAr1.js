import React from "react";
import style from "../../../../../components/Tuzilma/Bolimlar/KonselyariyaArxiv/Components/KonAr1.module.css";
// import Rotate from "react-reveal/Rotate";

const KonAr1 = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        {/* <Rotate bottom left cascade> */}
          <div className={style.head}>
            <h2>DEPARTMENT OF OFFICE AND ARCHIVES</h2>
            <span></span>
            <p>
            Tashkent State Law University Specialized
               Branch Office and Archive February 7, 2019
               “Crime Prevention and Public Safety
               training system in the field of procurement
               on Additional Measures for Improvement ”
               established in accordance with the decision.
            </p>
          </div>
        {/* </Rotate> */}
      </div>
    </div>
  );
};

export default KonAr1;
