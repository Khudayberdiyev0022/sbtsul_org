import React from "react";
import style from "./Qabul1.module.css";
import { BsCheckBox } from "react-icons/bs";
import { RiUserVoiceLine } from "react-icons/ri";
import { BsExclamationTriangle } from "react-icons/bs";

const Qabul1 = () => {
  return (
    <div className={style.main}>
      <div className={`container ${style.container}`}>
        <h5 className={style.title}>
        The following documents must be submitted to participate in the competition:
        </h5>
        <p>
          <BsCheckBox /> candidate's ID card (questionnaire, application form or
           reference-lens);
        </p>
        <p>
          <BsCheckBox /> from the (last) place of work (study)
           certificate of dismissal (if dismissed from office)
           a copy of the relevant order, if any) and a description;
        </p>
        <p>
          <BsCheckBox />
          Copy of diploma (extract from diploma), if studied abroad
           Certificate of nostrification, higher
           or a graduate of a secondary special, vocational education institution
           except for those studying in courses; {""}
        </p>
        <p>
          <BsCheckBox /> copy of the candidate's passport;
        </p>
        <h5 className={style.title}>
        Candidates who have expressed a desire to participate in the competition are eligible
           documents of Tashkent State Law University
           the specialized branch should be handed over to the personnel department;
        </h5>

        <h3 className={style.h3one}>Working conditions:</h3>
        <li>
          {" "}
          Opportunity for career development of the branch staff
           will give;
        </li>
        <li>
        Business trips abroad to study foreign experience,
           internships and training courses;
        </li>
        <li>
          {" "}
          A special title given to judicial officers is a career degree
           recommend to (chin);
        </li>
        <li>
        Salary surcharges and surcharges (for career levels)
           Up to 20-50%, for long-term service up to 5-40%)
           availability;
        </li>
        <li>
        Existence of a system of financial incentives (employee
           bonus up to 200% of the salary, bonuses);
        </li>
        <li>The amount of salary is determined by the employment contract.</li>

        <h3 className={style.h3}>Separate requirements:</h3>
        <p>
          <RiUserVoiceLine /> oral and written speaking skills;
        </p>
        <p>
          <RiUserVoiceLine /> knowledge of Russian and English is encouraged.
        </p>
        <h3 className={style.h3danger}>
        Procedure for working with personnel in judicial bodies and institutions
           In accordance with the Regulations on the following persons:
           can not be hired in institutions:
        </h3>
        <p>
          <BsExclamationTriangle /> He was not a citizen of the Republic of Uzbekistan
           individuals;
        </p>
        <p>
          <BsExclamationTriangle /> persons under the age of sixteen;
        </p>
        <p>
          <BsExclamationTriangle /> incompetent in the prescribed manner
           or persons with limited legal capacity;
        </p>
        <p>
          <BsExclamationTriangle /> for an intentional crime
           the conviction has not been completed or the conviction has not been expunged
           individuals;
        </p>
        <p>
          <BsExclamationTriangle /> previously relevant to their professional activities
           from a previous job for committing undesirable acts
           persons released in the prescribed manner;
        </p>
        <p>
          <BsExclamationTriangle /> developed by a judicial body or institution
           is a close relative or in-laws with the employee (parents,
           brothers, sisters, children, couples, as well
           parents, brothers, sisters and
           children), if employed or appointed
           The position is directly subordinate to one of them or his
           requires service under supervision;
        </p>
        <p>
          <BsExclamationTriangle /> forged documents or knowing how to get a job
           provided false information;
        </p>
        <p>
          <BsExclamationTriangle /> other as provided by law
           cases.
        </p>
      </div>
    </div>
  );
};

export default Qabul1;
