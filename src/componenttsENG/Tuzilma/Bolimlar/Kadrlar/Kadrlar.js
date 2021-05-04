import React from "react";
import style from "./Kadrlar.module.css";
import zarifa from "../../../../assets/img/zarifa.jpg";
import aziza from "../../../../assets/img/aziza.jpg";
import { Link } from "react-router-dom";

const KadrlarEng = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.title}>
          <h2>Human resources</h2>
        </div>
        <div className={style.users}>
          <div className={style.user}>
            <img src={zarifa} alt="zarifa" />
            <p>
              <strong>Boymurodova Zarifa Zokirovna</strong> – Human resources
               December 8 - Constitution of the Republic of Uzbekistan
               Uzbekistan on the occasion of the 28th anniversary of its adoption
               No. 640 of the Minister of Justice of the Republic of Kazakhstan dated December 3, 2020
               He was awarded the Certificate of Honor.
              <br />
              <span>
                {" "}
                <b>E-mail:</b> <Link>zari.1985@umail.uz</Link>{" "}
              </span>
            </p>
          </div>
          <div className={style.user}>
            <img src={aziza} alt="aziza" />
            <p>
              <strong>Abidjanova Aziza Baxramdjanovna</strong> – Human resources
               inspectors
              <br />
              <span>
                {" "}
                <b>E-mail:</b>{" "}
                <Link to="azizaotdelkadrova@gmail.com">
                  azizaotdelkadrova@gmail.com
                </Link>{" "}
              </span>
            </p>
          </div>
        </div>

        <div className={style.title}>
          <h2>DUTIES OF THE PERSONNEL DEPARTMENT</h2>
        </div>
        <div className={style.paragraf}>
          <p>
          The main tasks of the HR department are:
          </p>
          <ul>
            <li>organization of work on the basis of the legislation in the field;</li>
            <li>
            development of job descriptions for department staff,
               coordination and methodological guidance of improvement work
               to do;
            </li>
            <li>
            development of work plans of the department and ensuring their implementation;
            </li>
            <li>
            Minister of Justice of the Republic of Uzbekistan March 24, 2020
               Approved by Order No. 68 of the Judiciary and
               Regulations on the HR-management system in institutions
               In the bodies and institutions of Justice approved by Chapter 3
               to the requirements of the regulations on the procedure for working with personnel
               Recommendation, selection of employees to the relevant Branch,
               forming a staff reserve and recruiting
               familiarization of employees with internal local documents;
            </li>
            <li>
            In agreement with the director of the branch (regularly) Uzbekistan
               Special title and career of employees of the Ministry of Justice of the Republic
               preparation of recommendations for the levels;
            </li>
            <li>
            is a good example of productivity
               on incentives for faculty and staff
               make suggestions to management;
            </li>
            <li>
            Branch Employees Labor Code and Internal Regulations and
               to comply with labor discipline in accordance with the employment contract
               supply;
            </li>
            <li>
            the schedule of vacations of faculty and staff
               Development and Trade Union Committee to the Branch Director
               approval in agreement with
            </li>
            <li>
            Recruitment of professors and other staff
               on leave and business trips
               preparation of draft director's orders and labor
               Execution of contracts
            </li>
            <li>
            Prevent staff dissatisfaction, employ staff
               analysis and determination of the state of compliance with the discipline
               development of proposals to address shortcomings;
            </li>
            <li>
            diploma on the basis of applications of legal entities and individuals
               restore duplicates in the prescribed manner and them
               record keeping;
            </li>
            <li>
            on the use of diplomas issued to graduates
               to keep reports and to the relevant agencies in the prescribed manner
               send data
            </li>
            <li>
            Receipt of documents received by the department
               go, register outgoing documents, orders
               distribution in the prescribed manner
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default KadrlarEng;
