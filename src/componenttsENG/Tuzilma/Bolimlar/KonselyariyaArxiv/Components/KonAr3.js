import React from "react";
import style from "./KonAr3.module.css";
// import Fade from "react-reveal/Fade";
// import Zoom from "react-reveal/Zoom";

const KonAr3 = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        {/* <Fade top cascade> */}
          <div className={style.head}>
            <h2>DUTIES OF THE DEPARTMENT</h2>
            <span></span>
          </div>
        {/* </Fade> */}
        {/* <Zoom top cascade> */}
          <div className={style.grid}>
            <div className={style.block}>
              <div className={style.svg}>{/* <VscOrganization/> */}</div>
              <p>
                <li>
                Tashkent State Law University Specialized
                   Branch Office and Archive February 7, 2019
                   “Crime Prevention and Public Safety
                   training system in the field of procurement
                   additional improvement measures
                   was established in accordance with the resolution "On
                </li>
              </p>
              <p>
                <li>
                Chancellery and archives Branch of the Branch
                   accounting and electronic documentation in the branch
                   exchange and archive of branch activities
                   systematic accounting of documents and appropriate conditions
                   storage.
                </li>
              </p>
              <p>
                <li>
                The main functions of the office and the archive, office work and
                   electronic document exchange, structural
                   accounting of seals and stamps in departments, archival work
                   to ensure that
                </li>
              </p>
              <p>
                <li>
                1 chancellery manager, 1 person in the branch office
                   archivarius, 1 courier staff
                   is growing.
                </li>
              </p>
              <p>
                <li>
                Electronic control of documents kept in the branch
                   av.ijro.uz program is being used to do this.
                </li>
              </p>
            </div>
          </div>
        {/* </Zoom> */}
      </div>
    </div>
  );
};

export default KonAr3;
