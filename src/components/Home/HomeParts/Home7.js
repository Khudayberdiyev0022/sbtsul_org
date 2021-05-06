import React from "react";
import { Link } from "react-router-dom";
import style from "./Home7.module.css";
import { structures } from "../ExtraCards/Photo";
import Bounce from "react-reveal/Bounce";

const Home7 = () => {
  return (
    <div className={style.main}>
      <Bounce top cascade>
        <div className={style.linkBlock}>
          <Link to="/tuzilma">Tuzilma</Link>
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
      </Bounce>
    </div>
  );
};

export default Home7;
