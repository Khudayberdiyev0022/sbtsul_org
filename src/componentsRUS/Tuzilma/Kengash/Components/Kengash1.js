import React from "react";
import style from "../../../../components/Tuzilma/Kengash/Components/Kengash1.module.css";
// import Rotate from "react-reveal/Rotate";

const Kengash1 = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        {/* <Rotate bottom left cascade> */}
          <div className={style.head}>
            <h2>Совет</h2>
            <span></span>
            <p>
            Совет является постоянно действующим высшим коллегиальным органом специализированного филиала Ташкентского государственного юридического университета.{" "}
            </p>
          </div>
        {/* </Rotate> */}
      </div>
    </div>
  );
};

export default Kengash1;
