import React from "react";
import { Link } from "react-router-dom";
import style from "../../../components/Home/HomeParts/Home7.module.css";
import { structures } from "../ExtraCards/Photo";

const Home7Rus = () => {
  return (
    <div className={style.main}>
      <div className={style.linkBlock}>
        <Link to="/rus/tuzilma">Структура</Link>
      </div>
      <div className={style.container}>
        {structures.map((structure, index) => {
          return (
            <div key={index} className={style.box}>
              <div className={style.side}>
                <img src={structure.icon} alt="icon" />
              </div>
              <Link to={structure.to}>{structure.title}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home7Rus;
