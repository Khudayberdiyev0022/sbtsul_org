import React from "react";
import style from "./Arm1.module.css";
// import Rotate from "react-reveal/Rotate";

const Arm1 = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        {/* <Rotate bottom left cascade> */}
          <div className={style.head}>
            <h2>INFORMATION RESOURCE CENTER </h2>
            <span></span>
            <p>
            Tashkent State Law University Specialized
               Branch Information Resource Center as a structural subdivision of the Branch
               President of the Republic of Uzbekistan February 7, 2019
               “Crime prevention and public safety
               to improve the system of training in the field
               Resolution No. PQ-4166 "On Additional Measures"
               properly organized.
            </p>
          </div>
        {/* </Rotate> */}
      </div>
    </div>
  );
};

export default Arm1;
