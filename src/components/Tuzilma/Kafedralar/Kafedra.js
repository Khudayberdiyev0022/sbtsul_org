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
            <img alt='dxd' src={img1} />
          </div>
          <div className={style.content}>
            {/* <h2>Kafedra</h2> */}
            <p>DAVLAT-XUQUQIY FANLAR KAFEDRASI</p>
            <Link to="/dx-fanlar-kafedrasi">Malumotlar</Link>
          </div>
        </div>
        <div className={style.box}>
          <div className={style.imgBx}>
            <img alt='dxd' src={img2} />
          </div>
          <div className={style.content}>
            {/* <h2>Kafedra</h2> */}
            <p>JINOYAT HUQUQIY FANLAR KAFEDRASI</p>
            <Link to="/jh-fanlar-kafedrasi">Malumotlar</Link>
          </div>
        </div>
        <div className={style.box}>
          <div className={style.imgBx}>
            <img alt='dxd' src={img3} />
          </div>
          <div className={style.content}>
            {/* <h2>Kafedra</h2> */}
            <p>XUSUSIY-HUQUQIY FANLAR KAFEDRASI</p>
            <Link to="/xh-fanlar-kafedrasi">Malumotlar</Link>
          </div>
        </div>
        <div className={style.box}>
          <div className={style.imgBx}>
            <img alt='dxd' src={img4} />
          </div>
          <div className={style.content}>
            {/* <h2>Kafedra</h2> */}
            <p>UMUMTA'LIM FANLAR KAFEDRASI</p>
            <Link to="/u-fanlar-kafedrasi">Malumotlar</Link>
          </div>
        </div>
        <div className={style.box}>
          <div className={style.imgBx}>
            <img alt='dxd' src={img5} />
          </div>
          <div className={style.content}>
            {/* <h2>Kafedra</h2>/ */}
            <p>KASBIY-JANGOVOR TAYYORGARLIK FANLAR KAFEDRASI</p>
            <Link to="/kjt-fanlar-kafedrasi">Malumotlar</Link>
          </div>
        </div>
      </div>
    </div>
  )
  // return (
  //   <div classNameName={style.main}>
  //     <div classNameName={style.bg}>
  //       <h2>Kafedralar</h2>
  //     </div>
  //     <div classNameName={style.container}>
  //       <Link to="/dx-fanlar-kafedrasi">
  //         <span>DAVLAT-XUQUQIY FANLAR KAFEDRASI</span>
  //       </Link>
  //       <Link to="/jh-fanlar-kafedrasi">
  //         <span>JINOYAT HUQUQIY FANLAR KAFEDRASI</span>
  //       </Link>
  //       <Link to="/xh-fanlar-kafedrasi">
  //         <span>XUSUSIY-HUQUQIY FANLAR KAFEDRASI</span>
  //       </Link>
  //       <Link to="/u-fanlar-kafedrasi">
  //         <span>UMUMTA'LIM FANLAR KAFEDRASI</span>
  //       </Link>
  //       <Link to="/kjt-fanlar-kafedrasi">
  //         <span>KASBIY-JANGOVOR TAYYORGARLIK FANLAR KAFEDRASI</span>
  //       </Link>
  //     </div>
  //   </div>
  // );
};

export default Kafedra;
