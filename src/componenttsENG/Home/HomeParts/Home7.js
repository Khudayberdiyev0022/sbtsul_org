import React from "react";
import { Link } from "react-router-dom";
import style from "./Home7.module.css";
import { structures } from "../ExtraCards/Photo";

const Home7Eng = () => {
  return (
    <div className={style.main}>
      <div className={style.linkBlock}>
        <Link to="/tuzilma">Structure</Link>
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

export default Home7Eng;
