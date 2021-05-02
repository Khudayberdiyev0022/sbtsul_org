import React from "react";
import style from "./Tarbiyaviy3.module.css";
// import Fade from "react-reveal/Fade";
// import Zoom from "react-reveal/Zoom";

const Tarbiyaviy3 = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        {/* <Fade top cascade> */}
          <div className={style.head}>
            <h2>BO‘LIMNING VAZIFALARI</h2>
            <span></span>
          </div>
        {/* </Fade> */}
        {/* <Zoom top cascade> */}
          <div className={style.grid}>
            <div className={style.block}>
              <div className={style.svg}>{/* <VscOrganization/> */}</div>
              <p>
               Laboris occaecat do in sint nostrud minim voluptate excepteur ut. Reprehenderit velit ad ad est consequat minim sit deserunt amet dolor aliqua tempor. Labore fugiat voluptate cillum anim irure amet sint proident dolor consectetur nostrud proident. Cillum magna duis duis aliquip et enim laborum laborum sint. Esse officia nostrud velit occaecat labore minim fugiat minim voluptate ut fugiat voluptate fugiat incididunt.
              </p>
            </div>
          </div>
        {/* </Zoom> */}
      </div>
    </div>
  );
};

export default Tarbiyaviy3;
