import React from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";
import logoFooter from "../../assets/icons/logoFooter.svg";

const FooterRus = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.list}>
          <div className={style.sections}>
            <h3>Sahifalar</h3>
            <div className={style.links}>
              <Link to="/rus/talim">Вакансии</Link>
              <Link to="/rus/tuzilma">Состав</Link>
              <Link to="/rus/filial">Филиал</Link>
            </div>
          </div>
          <div className={style.sections}>
            <h3>Структуры</h3>
            <div className={style.links}>
              <Link to="/rus/kafedralar">Кафедры</Link>
              <Link to="/rus/bolimlar">Отделы</Link>
              <Link to="/rus/dekanatlar">Деканаты</Link>
            </div>
          </div>
          <div className={style.sections}>
            <h3>Другой</h3>
            <div className={style.links}>
              <Link to="/rus/yangiliklar">Новости</Link>
              <Link to="/rus/qabul">Приём</Link>
              <Link to="/rus/aloqa">Контакт</Link>
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
};

export default FooterRus;
