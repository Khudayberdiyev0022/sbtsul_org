import React from "react";
import style from "./Home2.module.css";
import president from "../../../assets/img/pr.jpg";

const Home2 = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.textPresident}>
          <h2>
          PRESIDENT OF THE REPUBLIC OF UZBEKISTAN FEBRUARY 7, 2019 <br />{" "}
          PQ – 4166 - NUMBER DECISION
          </h2>
          <h3>A specialized branch was established</h3>
        </div>
        <div className={style.bgAll}>
          <div
            className={style.leftImg}
            style={{ backgroundImage: `url(${president})` }}
          ></div>
          <div className={style.rightCenter}>
            <p>
            Decree of the President of the Republic of Uzbekistan dated 07.02.2019
               “Crime prevention and community safety
               to improve the system of training in the field
               On additional measures ”No. PP-4166
               Tashkent State Law University Specialized
               branch was established.
            </p>
          </div>
          <div className={style.rightText}></div>
        </div>
      </div>
    </div>
  );
};
export default Home2;
