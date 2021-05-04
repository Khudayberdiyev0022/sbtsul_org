import React, { useEffect, useState } from "react";
import style from "./Navbar.module.css";
import logo from "../../assets/icons/logoFT.svg";
import { NavLink } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import { connect } from "react-redux";
import { changeLanguage } from "../../actions";

const NavbarRus = (props) => {
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
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    if (window.location.pathname.includes("admin")) {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.pathname]);

  if (admin) {
    return null;
  } else {
    return (
      <div
        className={
          scroll
            ? `${style.mainFixed} ${style.main}`
            : `${style.mainStatic} ${style.main}`
        }
      >
        <div className={style.container}>
          <div className={style.navbar}>
            <NavLink to="/rus" activeStyle={{ color: "#0f2b53" }}>
              <img src={logo} alt="logo" />
            </NavLink>
            <div className={style.titleAll}>
              <h2>
                СПЕЦИАЛИЗИРОВАННЫЙ ФИЛИАЛ ТАШКЕНТСКИЙ ГОСУДАРСТВЕННЫЙ
                ЮРИДИЧЕСКИЙ УНИВЕРСИТЕТ
              </h2>
              <div className={style.titleName}>
                <div className={style.navbarLink}>
                  <NavLink to="/rus/filial" activeStyle={{ color: "white" }}>
                    Филиал <span></span>
                  </NavLink>
                </div>
                <div className={style.navbarLink}>
                  <NavLink to="/rus/tuzilma" activeStyle={{ color: "white" }}>
                    Структура <span></span>
                    <AiFillCaretDown />
                  </NavLink>
                  <div className={style.hoverDiv}>
                    <NavLink to="/rus/kengash">Совет</NavLink>
                    <NavLink to="/rus/rahbariyat">Руководство</NavLink>
                    {/* <NavLink to="/rus/direktorat">Direktorat</NavLink> */}
                    <NavLink to="/rus/dekanatlar">Деканаты</NavLink>
                    <NavLink to="/rus/kafedralar">Кафедры</NavLink>
                    <NavLink to="/rus/bolimlar">Разделы</NavLink>
                    <NavLink to="/rus/axborot-resurs-markazi">
                      Информационно-ресурсный центр
                    </NavLink>
                  </div>
                </div>
                <div className={style.navbarLink}>
                  <NavLink to="/rus/faoliyat" activeStyle={{ color: "white" }}>
                    Деятельность <span></span>
                    <AiFillCaretDown />
                  </NavLink>
                  <div className={style.hoverDiv}>
                    <NavLink to="/rus/ilmiy-kengash">Ученый Совет</NavLink>
                    <NavLink to="/rus/xalqaro-hamkorlik">
                      Международное Сотрудничество
                    </NavLink>
                  </div>
                </div>
                <div className={style.navbarLink}>
                  <NavLink to="/rus/talabalar" activeStyle={{ color: "white" }}>
                    Студенты <span></span>
                  </NavLink>
                </div>
                <div className={style.navbarLink}>
                  <NavLink to="/rus/qabul" activeStyle={{ color: "white" }}>
                    Приём <span></span>
                  </NavLink>
                </div>
                <div className={style.navbarLink}>
                  <NavLink
                    to="/rus/bizhaqimizda"
                    activeStyle={{ color: "white" }}
                  >
                    О нас<span></span>
                  </NavLink>
                </div>
                <div className={style.navbarLink}>
                  <NavLink to="/rus/aloqa" activeStyle={{ color: "white" }}>
                    Контакты <span></span>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className={style.languageBlock}>
              <div className={style.languageBox}>
                <NavLink
                  onClick={() => props.changeLanguage("UZB")}
                  to="/"
                  activeStyle={{ color: "white" }}
                >
                  UZB
                </NavLink>
              </div>
              <div className={style.languageBox}>
                <NavLink
                  onClick={() => props.changeLanguage("RUS")}
                  to="/rus"
                  activeStyle={{ color: "white" }}
                >
                  RUS
                </NavLink>
              </div>
              <div className={style.languageBox}>
                <NavLink
                  onClick={() => props.changeLanguage("ENG")}
                  to="/eng"
                  activeStyle={{ color: "white" }}
                >
                  ENG
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default connect(null, { changeLanguage })(NavbarRus);
