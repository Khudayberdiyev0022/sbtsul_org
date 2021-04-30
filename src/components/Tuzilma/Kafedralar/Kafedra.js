import React from "react";
import { Link } from "react-router-dom";
import style from "./Kafedra.module.css";

const Kafedra = () => {
  return (
    <div className={style.main}>
      <div className={style.bg}>
        <h2>Kafedralar</h2>
      </div>
      <ul>
        <Link to="/dx-fanlar-kafedrasi">
          <li>DAVLAT-XUQUQIY FANLAR KAFEDRASI</li>
        </Link>
        <Link to="/jh-fanlar-kafedrasi">
          <li>JINOYAT HUQUQIY FANLAR KAFEDRASI</li>
        </Link>
        <Link to="/xh-fanlar-kafedrasi">
          <li>XUSUSIY-HUQUQIY FANLAR KAFEDRASI</li>
        </Link>
        <Link to="/u-fanlar-kafedrasi">
          <li>UMUMTA'LIM FANLAR KAFEDRASI</li>
        </Link>
        <Link to="/kjt-fanlar-kafedrasi">
          <li>KASBIY-JANGOVOR TAYYORGARLIK FANLAR KAFEDRASI</li>
        </Link>
      </ul>
    </div>
  );
};

export default Kafedra;
