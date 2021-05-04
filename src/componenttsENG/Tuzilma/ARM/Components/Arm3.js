import React from "react";
import style from "./Arm3.module.css";
// import Fade from "react-reveal/Fade";
// import Zoom from "react-reveal/Zoom";

const Arm3 = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        {/* <Fade top cascade> */}
          <div className={style.head}>
            <h2>FUNCTIONS OF THE CENTER</h2>
            <span></span>
          </div>
        {/* </Fade> */}
        {/* <Zoom top cascade> */}
          <div className={style.grid}>
            <div className={style.block}>
              <div className={style.svg}>{/* <VscOrganization/> */}</div>
              <p>
                <span></span>
                During its existence, the Information Resource Center has been working in Uzbekistan
                 Laws and Resolutions of the Republic of Kazakhstan, ie April 13, 2011
                 Adopted “Library - on information activities
                 Law of the President of the Republic of Uzbekistan, June 20, 2006
                 PQ-381 «Information-library of the population of the Republic
                 Resolution of the Supreme Council of the Republic of Uzbekistan
                 and the Ministry of Secondary Special Education, December 29, 2006
                 295-conli orders and other documents.
              </p>
              <p>
                <span></span>
                Information-library fund Branch "Jurisprudence" direction
                 in the order agreed with the departments and the educational department,
                 donated resources, subscriptions to periodicals
                 and the development of higher and secondary special education
                 from the center, publishing houses, companies, universities
                 and permanent at the expense of publications from other organizations
                 is filled in. Information Resource Center Law
                 specified in the documents and provided for in the Charter of the Branch
                 as well as other duties assigned by the Branch Director
                 does
              </p>
            </div>
          </div>
        {/* </Zoom> */}
      </div>
    </div>
  );
};

export default Arm3;
