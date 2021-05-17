import React from "react";
import { Link } from "react-router-dom";
import style from "./Kafedra.module.css";
import img1 from "../../../assets/img/manaviy111.jpg";
import img2 from "../../../assets/img/kafedra1.jpg";
import img3 from "../../../assets/img/kafedra2.jpg";
import img4 from "../../../assets/img/kafedra3.jpg";
import img5 from "../../../assets/img/kafedra4.jpg";

const Kafedra = () => {
  return (
    <div className={style.main}>
      <div className={style.bg}>
        <h1>Kafedralar</h1>
      </div>
      <div className={style.container}>
        <div className={style.box}>
          <div className={style.imgBx}>
            <img alt="dxd" src={img1} />
          </div>
          <div className={style.content}>
            <p>DAVLAT-XUQUQIY FANLAR KAFEDRASI</p>
            <Link to="/dx-fanlar-kafedrasi">Malumotlar</Link>
          </div>
        </div>
        <div className={style.box}>
          <div className={style.imgBx}>
            <img alt="dxd" src={img2} />
          </div>
          <div className={style.content}>
            <p>JINOYAT HUQUQIY FANLAR KAFEDRASI</p>
            <Link to="/jh-fanlar-kafedrasi">Malumotlar</Link>
          </div>
        </div>
        <div className={style.box}>
          <div className={style.imgBx}>
            <img alt="dxd" src={img3} />
          </div>
          <div className={style.content}>
            <p>XUSUSIY-HUQUQIY FANLAR KAFEDRASI</p>
            <Link to="/xh-fanlar-kafedrasi">Malumotlar</Link>
          </div>
        </div>
        <div className={style.box}>
          <div className={style.imgBx}>
            <img alt="dxd" src={img4} />
          </div>
          <div className={style.content}>
            <p>UMUMTA'LIM FANLAR KAFEDRASI</p>
            <Link to="/u-fanlar-kafedrasi">Malumotlar</Link>
          </div>
        </div>
        <div className={style.box}>
          <div className={style.imgBx}>
            <img alt="dxd" src={img5} />
          </div>
          <div className={style.content}>
            <p>KASBIY-JANGOVOR TAYYORGARLIK FANLAR KAFEDRASI</p>
            <Link to="/kjt-fanlar-kafedrasi">Malumotlar</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kafedra;
