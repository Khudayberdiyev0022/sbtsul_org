import React from "react";
import style from "../../components/Informations/NewsCard.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const NewsCard = (props) => {

  return (
    <div className={style.main}>
      <div className={style.inMain}>
        <div className={style.card} >
          <div
            className={style.img}
            style={{ backgroundImage: `url(${props.new.pictureURL})` }}
          ></div>
          <div className={style.text}>
            <h3>{props.new.titleRus}</h3>
            <h5>{props.new.date}</h5>
            <p>{props.new.paragraphRus}</p>
            {/* <p>{api.p2}</p> */}
          </div>
        </div>
        <div className={style.containerButton}>
          <Link to="/rus">
            <span>НАЗАД...</span>
            <span>НАЗАД...</span>
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
