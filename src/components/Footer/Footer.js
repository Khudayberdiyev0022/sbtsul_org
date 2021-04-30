import React from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";
import logoFooter from "../../assets/icons/logoFooter.svg";

const Footer = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.list}>
          <div className={style.sections}>
            <h3>Sahifalar</h3>
            <div className={style.links}>
              <Link to="/filial">Filial</Link>
              <Link to="/tuzilma">Tuzilma</Link>
              <Link to="/talim">Ta'lim</Link>
            </div>
          </div>
          <div className={style.sections}>
            <h3>Tuzilmalar</h3>
            <div className={style.links}>
              <Link to="/kafedralar">Kafedralar</Link>
              <Link to="/bolimlar">Bo'limlar</Link>
              <Link to="/dekanatlar">Dekanatlar</Link>
            </div>
          </div>
          <div className={style.sections}>
            <h3>Boshqa</h3>
            <div className={style.links}>
              <Link to="/yangiliklar">Yangiliklar</Link>
              <Link to="/qabul">Qabul</Link>
              <Link to="/aloqa">Aloqa</Link>
            </div>
          </div>
        </div>
        <div className={style.blogLinks}>
          <Link to="/">Facebook</Link>
          <Link to="/">Telegram</Link>
          <img width="110px" src={logoFooter} alt="logoFooter" />
          <Link to="/">Youtube</Link>
          <Link to="/">Instagram</Link>
        </div>
        <p className={style.copy}>
          Copyright ©2021 TDYU Ixtisoslashtirilgan filiali. All right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
