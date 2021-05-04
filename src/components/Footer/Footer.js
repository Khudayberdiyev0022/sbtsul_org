import React, { useEffect, useadmin } from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";
import logoFooter from "../../assets/icons/logoFooter.svg";

const Footer = () => {
  const [admin, setadmin] = useadmin(false)
  useEffect(() => {
    if (window.location.pathname.includes('admin')) {
      setadmin(true)
    } else {
      setadmin(false)
    }
  })
  if (admin) {
    return null
  } else {
    return (
      <div className={style.main}>
        <div className={style.container}>
          <div className={style.list}>
            <div className={style.sections}>
              <h3>Sahifalar</h3>
              <div className={style.links}>
                <Link to="/talim">Bo'sh ish o'rinlari</Link>
                <Link to="/tuzilma">Tuzilma</Link>
                <Link to="/filial">Filial</Link>
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
            <a rel="noreferrer" target="_blank" href="https://fb.me/sbtsul">
              Facebook
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://t.me/TDYU_ixtisoslashtirilgan_filiali"
            >
              Telegram
            </a>
            <img width="110px" src={logoFooter} alt="logoFooter" />
            <a rel="noreferrer" target="_blank" href="#www">
              Youtube
            </a>
            <a
              rel="noreferrer"
              target="_blank"
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
  }


};

export default Footer;
