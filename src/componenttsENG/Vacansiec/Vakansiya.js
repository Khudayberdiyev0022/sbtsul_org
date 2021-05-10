import React, { useEffect } from "react";
import style from "../../components/Vacansiec/Vakansiya.module.css";
import { BsCloudDownload } from "react-icons/bs";
import docx from "../../components/Data/Ariza namuna tanlovga.docx";
import doc from "../../components/Data/Vakansiya.doc";
import { fetchVacancysProducts } from '../../actions'
import { connect } from 'react-redux'


const VakansiyaEng = (props) => {

  useEffect(() => {
    props.fetchVacancysProducts()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



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

        {props.vacancys?.map((api, index) => {
          return (
            <div className={style.card} key={index}>
              <h3>{api.titleEng}</h3>
              <div className={style.job}>
                <h3>{api.subTitleEng}</h3>
                <h3>
                  <span> З/П:</span> {api.costEng} <span>so'm</span>
                </h3>
              </div>
              <p>{api.paragraphEng}</p>
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

const mapStateToProps = state => {
  return {
    vacancys: state.productsVacancys[0]
  }
}


export default connect(mapStateToProps, { fetchVacancysProducts })(VakansiyaEng);