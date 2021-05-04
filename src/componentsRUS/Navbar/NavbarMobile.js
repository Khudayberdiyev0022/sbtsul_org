import React, { useEffect, useState } from "react";
import style from "./NavbarMobile.module.css";
import { FiMenu } from "react-icons/fi";
import { VscClose } from "react-icons/vsc";
import logo from "../../assets/icons/logoFT.svg";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { changeLanguage } from '../../actions'



function NavbarMobile(props) {
  const [clicked, setClicked] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.self.scrollY > 300) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  });

  return (
    <div
      className={
        scroll
          ? `${style.mainFixed} ${style.main}`
          : `${style.mainStatic} ${style.main}`
      }
    >
      <div className={style.container}>
        <div className={style.mainPart}>
          <Link onClick={() => setClicked(false)} to="/">
            <img src={logo} alt="logo" />
          </Link>
          {clicked ? (
            <VscClose onClick={() => setClicked(false)} />
          ) : (
            <FiMenu onClick={() => setClicked(true)} />
          )}
        </div>
        <div
          className={
            clicked
              ? `${style.subPart} ${style.open}`
              : `${style.subPart} ${style.close}`
          }
        >
          <div className={style.titleName}>
            <div className={style.navbarLink}>
              <Link
                onClick={() => setClicked(false)}
                datatext="Filial"
                to="/filial"
              >
                Филиал <span></span>
              </Link>
            </div>
            <div className={style.navbarLink}>
              <Link
                onClick={() => setClicked(false)}
                datatext="Tuzilma"
                to="/tuzilma"
              >
                Структура <span></span>
              </Link>
            </div>
            <div className={style.navbarLink}>
              <Link
                onClick={() => setClicked(false)}
                datatext="Faoliyat"
                to="/faoliyat"
              >
                Деятельность <span></span>
              </Link>
            </div>
            <div className={style.navbarLink}>
              <Link
                onClick={() => setClicked(false)}
                datatext="Talabalar"
                to="/talabalar"
              >
                Студенты <span></span>
              </Link>
            </div>
            <div className={style.navbarLink}>
              <Link
                onClick={() => setClicked(false)}
                datatext="Qabul"
                to="/qabul"
              >
                Приём <span></span>
              </Link>
            </div>
            <div className={style.navbarLink}>
              <Link
                onClick={() => setClicked(false)}
                datatext="Biz haqimizda"
                to="/bizhaqimizda"
              >
                О нас <span></span>
              </Link>
            </div>
            <div className={style.navbarLink}>
              <Link
                onClick={() => setClicked(false)}
                datatext="Aloqa"
                to="/aloqa"
              >
                Контакт <span></span>
              </Link>
            </div>
          </div>
          <div className={style.languageBlock}>
            <div className={style.languageBox}>
              <Link onClick={() => {
                setClicked(false)
                props.changeLanguage('UZB')
              }} to="/uzb">
                UZB
              </Link>
            </div>
            <div className={style.languageBox}>
              <Link onClick={() => {
                setClicked(false)
                props.changeLanguage('RUS')
              }} to="/rus">
                RUS
              </Link>
            </div>
            <div className={style.languageBox}>
              <Link onClick={() => {
                setClicked(false)
                props.changeLanguage('ENG')
              }} to="eng">
                ENG
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { changeLanguage })(NavbarMobile);
