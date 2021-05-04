import React from "react";
import style from "./Buxgal3.module.css";
// import Fade from "react-reveal/Fade";
// import Zoom from "react-reveal/Zoom";

const Buxgal3 = () => {
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
              Modern technical means and information of accounting
                organization using technology, budget
                funds, as well as extra-budgetary funds
                correct for the specific purposes specified in the cost estimate
                spending, cash and material security
                exercise regular control over the integrity of values
                increase the work of faculty and staff
                fees and equivalent fees, students
                timely calculation of scholarships in the prescribed manner
                and ensure their distribution
                receivables and payables on time
                debt repayment, financial, tax and
                preparation of other reports, legislation and the Branch
                Provided by the Charter and by the Director of the Branch
                performs other functions assigned to it.
              </p>
            </div>
          </div>
        {/* </Zoom> */}
      </div>
    </div>
  );
};

export default Buxgal3;
