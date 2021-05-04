import React from "react";
import style from "./About1.module.css";
import doc from "../../Data/МАЪЛУМОТ_матбуот_анжуманига_тўлиқ.doc";
import bg from "../../../assets/img/about.jpg";
// import Rotate from "react-reveal/Rotate";
import { BsCloudDownload } from "react-icons/bs";

const About1 = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        <div className={style.flex}>
          <div
            className={style.img}
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
            <div className={style.text}>
              <h3>Branch team</h3>
              <p>
                <span></span> Branch retraining course training
                 29 people on an hourly basis for training
                 in the system of law enforcement agencies and Tashkent
                 working at the State Law University
                 professors and teachers are involved
              </p>
              <p>
                <span></span>Professors and teachers in the main staff 4
                 in the system of the Prosecutor General's Office of the Republic of Uzbekistan, 2
                 of them in the system of the Ministry of Internal Affairs, 2 in the Ministry of Defense
                 in the system of the Ministry, 2 of them work in the system of the National Guard
                 of which 1 is the current staff of the system
                 operates in the Branch, included in the reserve.
              </p>
              <p>
                <span></span>3 of the manager and management staff are science
                 has a PhD degree. 1 of the management staff
                 In the system of the Ministry of Internal Affairs, 1 in the system of the prosecutor's office
                 was included in the existing personnel reserve
                 is operating in the Branch.
              </p>
              <p>
                <span></span>To the Ministry of Justice of the Republic of Uzbekistan
                 recommending employees to specific titles and career levels
                 belongs to the Minister of Justice for 2019-2020
                 18 people working in the Branch on the basis of orders
                 the employee was awarded special-title career ranks, 14 employees
                 titles obtained from previous employment in the judiciary
                 equated to career levels.
              </p>
              <p>
                <span></span>A special example of productivity
                 faculty and staff
                 In order to encourage 1 employee of the Ministry of Justice
                 "Excellence in Justice" badge, 6 professors and teachers
                 and staff “Certificate of Honor” of the Minister of Justice, 13 people
                 Professors and staff of the Branch “Honorary
                 was awarded the "label".
              </p>
              <div className={style.footer}>
                <p>
                For information on the Specialized Branch of TSU
                   click the link below.
                  <span className={style.btn}>
                    <a href={doc} rel="noreferrer" download>
                    Download the pdf file  
                      <BsCloudDownload />
                    </a>
                  </span>
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About1;
