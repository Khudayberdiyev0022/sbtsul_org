import React from "react";
import { Link } from "react-router-dom";
import style from "../../../components/Tuzilma/Kafedralar/Kafedra.module.css";
import img1 from "../../../assets/img/manaviy111.jpg";
import img2 from "../../../assets/img/kafedra1.jpg";
import img3 from "../../../assets/img/kafedra2.jpg";
import img4 from "../../../assets/img/kafedra3.jpg";
import img5 from "../../../assets/img/kafedra4.jpg";

const KafedraEng = () => {
  return (
    <div className={style.main}>
      <div className={style.bg}>
        <h1>Chairs</h1>
      </div>
      <div className={style.container}>
        <div className={style.box}>
          <div className={style.imgBx}>
            <img alt="dxd" src={img1} />
          </div>
          <div className={style.content}>
            <p>DEPARTMENT OF STATE LEGAL SCIENCES</p>
            <Link to="/eng/dx-fanlar-kafedrasi">Information</Link>
          </div>
        </div>
        <div className={style.box}>
          <div className={style.imgBx}>
            <img alt="dxd" src={img2} />
          </div>
          <div className={style.content}>
            <p>DEPARTMENT OF CRIMINAL LAW SCIENCES</p>
            <Link to="/eng/jh-fanlar-kafedrasi">Information</Link>
          </div>
        </div>
        <div className={style.box}>
          <div className={style.imgBx}>
            <img alt="dxd" src={img3} />
          </div>
          <div className={style.content}>
            <p>DEPARTMENT OF PRIVATE LEGAL SCIENCES</p>
            <Link to="/eng/xh-fanlar-kafedrasi">Information</Link>
          </div>
        </div>
        <div className={style.box}>
          <div className={style.imgBx}>
            <img alt="dxd" src={img4} />
          </div>
          <div className={style.content}>
            <p>DEPARTMENT OF GENERAL SCIENCES</p>
            <Link to="/eng/u-fanlar-kafedrasi">Information</Link>
          </div>
        </div>
        <div className={style.box}>
          <div className={style.imgBx}>
            <img alt="dxd" src={img5} />
          </div>
          <div className={style.content}>
            <p>DEPARTMENT OF PROFESSIONAL COMBAT TRAINING SCIENCES</p>
            <Link to="/eng/kjt-fanlar-kafedrasi">Information </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KafedraEng;
