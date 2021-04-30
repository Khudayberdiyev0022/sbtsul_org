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
              <Link to='/'>Filial</Link>
              <Link to='/'>Tuzilma</Link>
              <Link to='/'>Ta'lim</Link>
            </div>
          </div>
          <div className={style.sections}>
            <h3>Tuzilmalar</h3>
            <div className={style.links}>
              <Link to='/'>Kafedralar</Link>
              <Link to='/'>Bo'limlar</Link>
              <Link to='/'>Dekanatlar</Link>
            </div>
          </div>
          <div className={style.sections}>
            <h3>Boshqa</h3>
            <div className={style.links}>
              <Link to='/'>Yangiliklar</Link>
              <Link to='/'>Qabdiv</Link>
              <Link to='/'>Aloqa</Link>
            </div>
          </div>
        </div>
        <div className={style.blogLinks}>
          <Link to='/'>Facebook</Link>
          <Link to='/'>Telegram</Link>
          <img width='110px' src={logoFooter} alt="logoFooter" />
          <Link to='/'>Youtube</Link>
          <Link to='/'>Instagram</Link>
        </div>
        <p className={style.copy}>
          Copyright ©2021 TDYU Ixtisoslashtirilgan filiali. All right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
