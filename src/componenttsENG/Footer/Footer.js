import React from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";
import logoFooter from "../../assets/icons/logoFooter.svg";

const FooterEng = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.list}>
          <div className={style.sections}>
            <h3>Pages</h3>
            <div className={style.links}>
              <Link to="/eng/vakansiya">Vacancies</Link>
              <Link to="/eng/tuzilma">Structure</Link>
              <Link to="/eng/filial">Branch</Link>
            </div>
          </div>
          <div className={style.sections}>
            <h3>Structures</h3>
            <div className={style.links}>
              <Link to="/eng/kafedralar">Chairs</Link>
              <Link to="/eng/bolimlar">Sections</Link>
              <Link to="/eng/dekanatlar">Dean's offices</Link>
            </div>
          </div>
          <div className={style.sections}>
            <h3>Other</h3>
            <div className={style.links}>
              <Link to="/eng/yangiliklar">News</Link>
              <Link to="/eng/qabul">Acceptance</Link>
              <Link to="/eng/aloqa">Communication</Link>
            </div>
          </div>
        </div>
        <div className={style.blogLinks}>
          <a rel="noreferrer" target="_blank" href="https://fb.me/sbtsul">
            Facebook
          </a>
          <a
            rel="noreferrer"
            target="__blank"
            href="https://t.me/TDYU_ixtisoslashtirilgan_filiali"
          >
            Telegram
          </a>
          <Link to="/eng">
            <img width="110px" src={logoFooter} alt="logoFooter" />
          </Link>
          <a rel="noreferrer" target="_blank" href="#www">
            Youtube
          </a>
          <a
            rel="noreferrer"
            target="__blank"
            href="https://www.instagram.com/invites/contact/?i=1z2xa69waflg&utm_content=k91uf44"
          >
            Instagram
          </a>
        </div>
        <p className={style.copy}>
          Copyright ©2021 TDYU Ixtisoslashtirilgan filiali. All right Reserved
        </p>
      </div>
    </div>
  );
};

export default FooterEng;
