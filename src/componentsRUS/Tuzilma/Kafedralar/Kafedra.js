import React from "react";
import { Link } from "react-router-dom";
import style from "../../../components/Tuzilma/Kafedralar/Kafedra.module.css";
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
            <img src={img1} alt='img1'/>
          </div>
          <div className={style.content}>
            {/* <h2>Kafedra</h2> */}
            <p>КАФЕДРА ГОСУДАРСТВЕННО-ПРАВОВЫХ ДИСЦИПЛИН</p>
            <Link to="/rus/dx-fanlar-kafedrasi">Инфомация</Link>
          </div>
        </div>
        <div className={style.box}>
          <div className={style.imgBx}>
            <img src={img2} alt='dxd'/>
          </div>
          <div className={style.content}>
            {/* <h2>Kafedra</h2> */}
            <p>КАФЕДРА УГОЛОВНО-ПРАВОВОЙ ДИСЦИПЛИН</p>
            <Link to="/rus/jh-fanlar-kafedrasi">Инфомация</Link>
          </div>
        </div>
        <div className={style.box}>
          <div className={style.imgBx}>
            <img alt='dxd' src={img3} />
          </div>
          <div className={style.content}>
            <p>КАФЕДРА ЧАСТНЫХ ПРАВОВЫХ ДИСЦИПЛИН</p>
            <Link to="/rus/xh-fanlar-kafedrasi">Инфомация</Link>
          </div>
        </div>
        <div className={style.box}>
          <div className={style.imgBx}>
            <img src={img4} alt='dxd' />
          </div>
          <div className={style.content}>
            <p>КАФЕДРА ОБЩЕОБРАЗОВТЕЛЬНИХ ДИСЦИПЛИН</p>
            <Link to="/rus/u-fanlar-kafedrasi">Инфомация</Link>
          </div>
        </div>
        <div className={style.box}>
          <div className={style.imgBx}>
            <img src={img5}  alt='dxd'/>
          </div>
          <div className={style.content}>
=            <p>КАФЕДРА ПРОФЕССИОНАЛЬНО-БОЕВОЙ ПОДГОТОВКИ</p>
            <Link to="/rus/kjt-fanlar-kafedrasi">Инфомация</Link>
          </div>
        </div>
      </div>
    </div>
  )
 
};

export default KafedraRus;
