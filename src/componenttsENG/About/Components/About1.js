import React from "react";
import style from "../../../components/About/Components/About1.module.css";
import doc from "../../../components/Data/МАЪЛУМОТ_матбуот_анжуманига_тўлиқ.doc";
import bg from "../../../assets/img/about.jpg";
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
            <h3>Branch staff</h3>
            <p>
              <span></span> The retraining course of the branch have outsourced
              29 professors and teachers on an hourly basis who work at the Law
              Enforcement System and Tashkent State University of Law.
            </p>
            <p>
              <span></span>The majority of scientific and teaching staff are
              employed on full-time and four of them have prior experience in
              the system of the General Prosecutor's Office of the Republic of
              Uzbekistan, two are experienced in the Ministry of Internal
              Affairs, two of them were engaged in the Ministry of Defense, and
              the latter has been reserved in the existing personnel of the
              branch.
            </p>
            <p>
              <span></span>Three personnel of directory and managerial staff
              hold PhD degrees. One of the managerial staff has prior work
              experience at the Ministry of Internal Affairs, one was employed
              at the Prosecutor's Office, and is currently enrolled in the
              existing personnel reserve of the branch.
            </p>
            <p>
              <span></span>In accordance with the relevant orders of the
              Ministry of Justice of the Republic of Uzbekistan, eighteen
              employees of the Branch were awarded special degrees in 2019-2020,
              the awards of fourteen employees from previous jobs were entitled
              to professional degrees.
            </p>
            <p>
              <span></span>To encourage professors and teachers who have
              contributed a great asset to the work productivity, a staff member
              was awarded the “Excellence in Justice” badge of the Ministry of
              Justice, six professors and staff members were presented the
              “Certificate of Honour” of the Ministry of Justice, thirteen
              professors and staff members of the Branch were handed in the
              "Certificate of Honour" of the director.
            </p>
            <div className={style.footer}>
              <p>
                Click the link below for further information about Specialized
                Branch of TSUL
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
