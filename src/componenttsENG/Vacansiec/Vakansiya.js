import React from "react";
import style from "./Vakansiya.module.css";
import { BsCloudDownload } from "react-icons/bs";
import docx from "../../components/Data/Ariza namuna tanlovga.docx";
import doc from "../../components/Data/Vakansiya.doc";

const VakansiyaEng = () => {
  const apis = [
    {
      jobTitle: "Dean's Office of Preparatory Courses",
      job: "Dean",
      salary: "2 000 000",
      aboutJob1: `Have a master's degree or PhD in higher legal education, at least in relevant management positions in educational institutions (head of department, dean or deputy course, head of the center, head of department or division, etc.)
      Have 5 years of effective work experience`,
    },
    {
      jobTitle: "Directorate",
      job: "Psychologist",
      salary: "1 913 835 ",
      aboutJob1: `Potential citizens of the Republic of Uzbekistan with higher (special) education, computer literacy, relevant knowledge and experience`,
    },
    {
      jobTitle: "Office and archive",
      job: "Courier",
      salary: "747 300 ",
      aboutJob1: `Citizens of the Republic of Uzbekistan with secondary special education
      (first time working
      2018-2020 graduates will be accepted)`,
    },
    {
      jobTitle: "Department of Information Technology",
      job: "Engineer-programmer",
      salary: "1 018 482 ",
      aboutJob1: `Potential citizens of the Republic of Uzbekistan with higher (special) education, computer literacy, relevant knowledge and experience`,
    },
    {
      jobTitle: "Information resource center",
      job: "Librarian",
      salary: "1 124 687 ",
      aboutJob1: `Potential citizens of the Republic of Uzbekistan with higher (special) education, computer literacy, relevant knowledge and experience
      (first time working
      2018-2020 graduates will be accepted`,
    },
    {
      jobTitle: "Аinformation resource center",
      job: `Librarian
      (instead of childcare worker)`,
      salary: "1 124 687 ",
      aboutJob1: `Potential citizens of the Republic of Uzbekistan with higher (special) education, computer literacy, relevant knowledge and experience`,
    },
  ];

  return (
    <div className={style.main}>
      <div className={style.inMain}>
        <div className={style.titleText}>
          <h3>Welcome to jobs!!!</h3>
          <p>
            Specialized branch of Tashkent State Law University hire qualified
            specialists in the following specialties offers. Recruitment is done
            on a competitive basis. Find out more about vacancies and
            competitions below possible.
          </p>
          <p>2021 years 10 aprel №2</p>
          <div className={style.footer}>
            <p>
              Tashkent State Law University Specialized The branch invites
              qualified personnel to fill vacancies does
              <span className={style.btn}>
                <a href={doc} rel="noreferrer" download>
                  (doc) download the file
                  <BsCloudDownload />
                </a>
              </span>
            </p>
          </div>
        </div>

        {apis.map((api, index) => {
          return (
            <div className={style.card} key={index}>
              <h3>{api.jobTitle}</h3>
              <div className={style.job}>
                <h3>{api.job}</h3>
                <h3>
                  <span> Salary:</span> {api.salary} <span>sum</span>
                </h3>
              </div>
              <p>{api.aboutJob1}</p>
            </div>
          );
        })}
        <div className={style.vakantJobs}>
          <h5>Jobs conditions</h5>
          <ul>
            <li>
              The branch provides employees with professional and career growth
              (career) opportunities;
            </li>
            <li>
              Recommendation to the special ranks (ranks) given to the employees
              of the judiciary;
            </li>
            <li>
              Existence of bonuses and surcharges (up to 20-50% for career
              levels, up to 5-40% for long service in the judiciary);
            </li>
            <li>
              Existence of a system of financial incentives (bonuses up to 200%
              of the employee's salary, bonuses);
            </li>
            <li>
              The amount of salary is determined by the employment contract.
            </li>
            <li>
              Candidates: application for the competition must submit a personal
              reference (lens), a copy of the diploma, a copy of passport to the
              e-mail:{" "}
              <a
                href="mailto://kadr@sbtsul.uz"
                rel="noreferrer"
                target="_blank"
              >
                kadr@sbtsul.uz
              </a>
            </li>
            <li>
              {" "}
              <strong>
                The application and related documents must be received by April
                25, 2021 at 6:00 p.m. accepted until.
              </strong>{" "}
            </li>
            <li>
              The reference includes the candidate's address, mobile phone
              numbers and e-mail addresses should be specified. Learn more:
              <a href="tel://+998909442962" rel="noreferrer" target="_blank">
                +998 90 944 29 62
              </a>
            </li>
            <li>
              In case of violation of the selection procedure or corruption of
              the Ministry of Justice
              <a href="tel://1008" rel="noreferrer" target="_blank">
                “1008”
              </a>
              hotline,
              <a
                href="https://minjust.uz/uz/anticorruption/feedback/"
                rel="noreferrer"
                target="_blank"
              >
                @antikorbot
              </a>
              telegram channel and branch
              <a href="tel://+998712070378" rel="noreferrer" target="_blank">
                +998 71 207 03 78
              </a>{" "}
              you can contact the hotline.
            </li>
            <h5>
              The selection process is carried out in the following stages:
            </h5>
            <p>1.Acceptance of documents;</p>
            <p>2.Study of applications and documents;</p>
            <p>3.Conducting tests;</p>
            <p>4.Conversation</p>
          </ul>
        </div>
        <div className={style.footer}>
          <p>
            Participate in the competition of the Specialized Branch of TSU You
            can download a sample of this by following this link.
            <span className={style.btn}>
              <a href={docx} rel="noreferrer" download>
                (docx) download the file
                <BsCloudDownload />
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VakansiyaEng;
