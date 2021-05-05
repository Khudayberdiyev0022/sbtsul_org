import React from "react";
import style from "./NewsCard.module.css";
import img from "../../assets/img/army.jpg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const NewsCard = (props) => {
  console.log(props.new);
  const apis = [
    {
      img: img,
      title: "MА'NАVIY VА MА'RIFIY TАSHАBBUS АMАLDА",
      data: "5.05.2021",
      p1:
        "Mamlakatimizda mustaqil va erkin fikrlaydigan, zamonaviy ilm-fan yutuqlarini, oʼz kasbini puxta oʼzlashtirgan talaba yoshlarni malakaliy mutaxassis qilib yetkazishga alohida eʼtibor...",
      p2:
        "Mamlakatimizda mustaqil va erkin fikrlaydigan, zamonaviy ilm-fan yutuqlarini, oʼz kasbini puxta oʼzlashtirgan talaba yoshlarni malakaliy mutaxassis qilib yetkazishga alohida eʼtibor...",
    },
  ];
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        {apis.map((api, index) => {
          return (
            <div className={style.card} key={index}>
              <div
                className={style.img}
                style={{ backgroundImage: `url(${props.new.image})` }}
              ></div>
              <div className={style.text}>
                <h3>{props.new.title}</h3>
                {/* <h5>{api.data}</h5> */}
                <p>{props.new.paragraph}</p>
                {/* <p>{api.p2}</p> */}
              </div>
            </div>
          );
        })}
        <div className={style.containerButton}>
          <Link to="/">
            <span>Orqaga...</span>
            <span>Orqaga...</span>
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
