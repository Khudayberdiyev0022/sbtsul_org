import React from "react";
import style from "../../components/Informations/NewsCard.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const NewsCard = (props) => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        <div className={style.card}>
          <div
            className={style.img}
            style={{
              backgroundImage: `url(http://sbtsul1.pythonanywhere.com${props.new.image})`,
            }}
          ></div>
          <div className={style.text}>
            <h3>{props.new.titleEng}</h3>
            <h5>{props.new.date.split("-").reverse().join(".")}</h5>
            <p>{props.new.paragraphEng}</p>
          </div>
        </div>
        <div className={style.containerButton}>
          <Link to="/eng">
            <span>Back...</span>
            <span>Back...</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    new: state.new,
  };
};

export default connect(mapStateToProps, null)(NewsCard);
