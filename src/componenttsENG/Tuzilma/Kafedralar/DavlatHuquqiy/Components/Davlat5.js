import React from "react";
import style from "./Davlat5.module.css";
// import Zoom from "react-reveal/Zoom";
import img from "../../../../../assets/img/manaviy111.jpg";

const Davlat5 = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        {/* <Zoom top> */}
          <h2>SCIENTIFIC AND SCIENTIFIC-METHODICAL WORKS</h2>
          <span></span>
          <div className={style.flex}>
            <div
              className={style.img}
              style={{ backgroundImage: `url(${img})` }}
            ></div>

            <p>
              <span></span> Currently, the scientific potential of the department is 33%
               until the end of the 2021/2022 academic year
               the figure is expected to increase by 100 percent. Short-term chair
               in international scientific journals with a high impact factor among professors
               - About 10, in the republican scientific journals - about 15 scientific
               published articles, international and national
               at conferences - with about 15 articles and theses
               participated.
            </p>
          </div>
          <p>
            <span></span> Ministry of Justice of the Republic of Uzbekistan, Internal
             Ministry of Foreign Affairs, Tashkent State Law University, National
             Guards Military Technical Institute, Academy of the Ministry of Internal Affairs
             and 2020 in collaboration with the Academy of Public Administration
             In November, “People in the context of legal reform
             strengthening the protection of constitutional rights and freedoms
             Current issues "Republican scientific-practical online
             conference was organized and held.
          </p>
          <p>
          The department is staffed by professors and teachers
             different disciplines, directions, taking into account their interests
             organized scientific circles on In particular, “Discussion
             club ”; “Government” and “Legislative Techniques” are official documents
             training "scientific circles, including.
          </p>
        {/* </Zoom> */}
      </div>
    </div>
  );
};

export default Davlat5;
