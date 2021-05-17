import React, { useEffect, useState } from "react";
import style from "../../components/Navbar/NavbarMobile.module.css";
import { FiMenu } from "react-icons/fi";
import { VscClose } from "react-icons/vsc";
import logo from "../../assets/icons/logoFT.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { changeLanguage } from "../../actions";

function NavbarMobile(props) {
  const [clicked, setClicked] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.self.scrollY > 300) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }, 500);
    return () => {
      clearInterval(interval);
    };
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
          <div></div>
          <Link className={style.logo} onClick={() => setClicked(false)} to="/">
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
                to="/eng/filial"
              >
                Branch <span></span>
              </Link>
            </div>
            <div className={style.navbarLink}>
              <Link
                onClick={() => setClicked(false)}
                datatext="Tuzilma"
                to="/eng/tuzilma"
              >
                Structure <span></span>
              </Link>
            </div>
            <div className={style.navbarLink}>
              <Link
                onClick={() => setClicked(false)}
                datatext="Faoliyat"
                to="/eng/faoliyat"
              >
                Activity <span></span>
              </Link>
            </div>
            <div className={style.navbarLink}>
              <Link
                onClick={() => setClicked(false)}
                datatext="Talabalar"
                to="/eng/talabalar"
              >
                Students <span></span>
              </Link>
            </div>
            <div className={style.navbarLink}>
              <Link
                onClick={() => setClicked(false)}
                datatext="Qabul"
                to="/eng/qabul"
              >
                Acceptance <span></span>
              </Link>
            </div>
            <div className={style.navbarLink}>
              <Link
                onClick={() => setClicked(false)}
                datatext="Biz haqimizda"
                to="/eng/bizhaqimizda"
              >
                About Us <span></span>
              </Link>
            </div>
            <div className={style.navbarLink}>
              <Link
                onClick={() => setClicked(false)}
                datatext="Aloqa"
                to="/eng/aloqa"
              >
                Contact <span></span>
              </Link>
            </div>
          </div>
          <div className={style.languageBlock}>
            <div className={style.languageBox}>
              <Link
                onClick={() => {
                  setClicked(false);
                  props.changeLanguage("UZB");
                }}
                to="/"
              >
                UZB
              </Link>
            </div>
            <div className={style.languageBox}>
              <Link
                onClick={() => {
                  setClicked(false);
                  props.changeLanguage("RUS");
                }}
                to="/rus"
              >
                RUS
              </Link>
            </div>
            <div className={style.languageBox}>
              <Link
                onClick={() => {
                  setClicked(false);
                  props.changeLanguage("ENG");
                }}
                to="/eng"
              >
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
