import React from "react";
import { Link } from "react-router-dom";
import style from "./Kafedra.module.css";
import img1 from "../../../assets/img/manaviy111.jpg";
import img2 from "../../../assets/img/kafedra1.jpg";
import img3 from "../../../assets/img/kafedra2.jpg";
import img4 from "../../../assets/img/kafedra3.jpg";
import img5 from "../../../assets/img/kafedra4.jpg";

const KafedraRus = () => {
  return (
    <div className={style.main}>
      <div className={style.bg}>
        <h1>Кафедры</h1>
      </div>
      <div className={style.container}>
        <div className={style.box}>
          <div className={style.imgBx}>
            <img alt='dxd' src={img1} />
          </div>
          <div className={style.content}>
            {/* <h2>Kafedra</h2> */}
            <p>КАФЕДРА ГОСУДАРСТВЕННЫХ ПРАВОВЫХ НАУК</p>
            <Link to="/dx-fanlar-kafedrasi">Инфомация</Link>
          </div>
        </div>
        <div className={style.box}>
          <div className={style.imgBx}>
            <img alt='dxd' src={img2} />
          </div>
          <div className={style.content}>
            {/* <h2>Kafedra</h2> */}
            <p>КАФЕДРА УГОЛОВНО-ПРАВОВОЙ НАУКИ</p>
            <Link to="/jh-fanlar-kafedrasi">Инфомация</Link>
          </div>
        </div>
        <div className={style.box}>
          <div className={style.imgBx}>
            <img alt='dxd' src={img3} />
          </div>
          <div className={style.content}>
            {/* <h2>Kafedra</h2> */}
            <p>КАФЕДРА ЧАСТНЫХ ПРАВОВЫХ НАУК</p>
            <Link to="/xh-fanlar-kafedrasi">Инфомация</Link>
          </div>
        </div>
        <div className={style.box}>
          <div className={style.imgBx}>
            <img alt='dxd' src={img4} />
          </div>
          <div className={style.content}>
            {/* <h2>Kafedra</h2> */}
            <p>КАФЕДРА ОБЩИХ НАУК</p>
            <Link to="/u-fanlar-kafedrasi">Инфомация</Link>
          </div>
        </div>
        <div className={style.box}>
          <div className={style.imgBx}>
            <img alt='dxd' src={img5} />
          </div>
          <div className={style.content}>
            {/* <h2>Kafedra</h2>/ */}
            <p>КАФЕДРА ПРОФЕССИОНАЛЬНЫХ БОЕВЫХ НАУК</p>
            <Link to="/kjt-fanlar-kafedrasi">Инфомация</Link>
          </div>
        </div>
      </div>
    </div>
  )
 
};

export default KafedraRus;
