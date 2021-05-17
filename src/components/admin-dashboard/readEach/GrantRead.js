import React, { useState } from "react";
import style from "./Style.module.css";
import { connect } from "react-redux";
import NotFound from "../main-parts/404";
import { Link } from "react-router-dom";
import { Fragment } from "react";

function GrantRead(props) {
  const [language, setLanguage] = useState("UZB");
  if (!props.admin) {
    return <NotFound />;
  }

  return (
    <div className={style.main}>
      <div className={style.container}>
        <h1>Информация о приёма</h1>
        <div className={style.language}>
          <h1 onClick={() => setLanguage("UZB")}>UZB</h1>
          <h1 onClick={() => setLanguage("RUS")}>RUS</h1>
          <h1 onClick={() => setLanguage("ENG")}>ENG</h1>
        </div>
        <div className={style.grantInformation}>
          {language === "UZB" && (
            <Fragment>
              <h1>{props.information.titleUzb}</h1>
              <p>{props.information.numberOfStudentsDailyUzb}</p>
              <p>{props.information.numberOfStudentsAllUzb}</p>
              <p>{props.information.numberOfAllQuotasUzb}</p>
            </Fragment>
          )}
          {language === "ENG" && (
            <Fragment>
              <h1>{props.information.titleEng}</h1>
              <p>{props.information.numberOfStudentsDailyEng}</p>
              <p>{props.information.numberOfStudentsAllEng}</p>
              <p>{props.information.numberOfAllQuotasEng}</p>
            </Fragment>
          )}
          {language === "RUS" && (
            <Fragment>
              <h1>{props.information.titleRus}</h1>
              <p>{props.information.numberOfStudentsDailyRus}</p>
              <p>{props.information.numberOfStudentsAllRus}</p>
              <p>{props.information.numberOfAllQuotasRus}</p>
            </Fragment>
          )}
        </div>
        <Link to="/admin">Главная страница</Link>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    information: state.read[0],
    admin: state.admin[0],
  };
};

export default connect(mapStateToProps, null)(GrantRead);
