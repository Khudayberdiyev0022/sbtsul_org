import React from "react";
import style from "./Moliya3.module.css";
// import Fade from "react-reveal/Fade";
// import Zoom from "react-reveal/Zoom";

const Moliya3 = () => {
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
                Further strengthening the financial and economic position of the branch,
                   strict adherence to budgetary discipline, finance and economics
                   scheduled activities, budgetary and extra-budgetary
                   the effectiveness of the targeted use of funds
                   organization of increase;
                </li>
              </p>
              <p>
                <li>
                Branch staffing tables, cost estimates
                   develop, modify and add
                   to carry out their work;
                </li>
              </p>
              <p>
                <li>
                their purposes from the funds specified in the cost estimates
                   proper use, inappropriate or excessive cost
                   control of inadmissibility;
                </li>
              </p>
              <p>
                <li>
                overtime pay
                   make it happen;
                </li>
              </p>
              <p>
                <li>
                constantly updated
                   financial and economic performance
                   timely introduction;
                </li>
              </p>
              <p>
                <li>
                all financial and economic to the relevant organizations
                   timely preparation and submission of reports;
                </li>
              </p>
              <p>
                <li>
                Goods to be purchased for the activities of the branch,
                   public procurement of works and services special trade information
                   provision and control of placement on the portal;
                </li>
              </p>
              <p>
                <li>
                provided by the legislation and the Charter of the Branch and
                   Other duties assigned by the branch director
                   do
                </li>
              </p>
            </div>
          </div>
        {/* </Zoom> */}
      </div>
    </div>
  );
};

export default Moliya3;
