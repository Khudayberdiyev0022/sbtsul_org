import React, { useEffect, useState } from "react";
import style from "./Navbar.module.css";
import logo from "../../assets/icons/logoFT.svg";
import { NavLink } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";

const Navbar = () => {
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
        <div className={style.navbar}>
          <NavLink to="/" activeStyle={{ color: "#0f2b53" }}>
            <img src={logo} alt="logo" />
          </NavLink>
          <div className={style.titleAll}>
            <h2>
              TOSHKENT DAVLAT YURIDIK UNIVERSITETINING IXTISOSLASHTIRILGAN
              FILIALI
            </h2>
            <div className={style.titleName}>
              <div className={style.navbarLink}>
                <NavLink to="/filial" activeStyle={{ color: "white" }}>
                  Filial <span></span>
                </NavLink>
              </div>
              <div className={style.navbarLink}>
                <NavLink to="/tuzilma" activeStyle={{ color: "white" }}>
                  Tuzilma <span></span>
                  <AiFillCaretDown />
                </NavLink>
                <div className={style.hoverDiv}>
                  <NavLink to="/kengash">Kengash</NavLink>
                  <NavLink to="/rahbariyat">Rahbariyat</NavLink>
                  <NavLink to="/dekanatlar">Dekanatlar</NavLink>
                  <NavLink to="/kafedralar">Kafedralar</NavLink>
                  <NavLink to="/bolimlar">Bo'limlar</NavLink>
                  <NavLink to="/axborot-resurs-markazi">
                    Axborot Resurs markazi
                  </NavLink>
                </div>
              </div>
              <div className={style.navbarLink}>
                <NavLink to="/faoliyat" activeStyle={{ color: "white" }}>
                  Faoliyat <span></span>
                  <AiFillCaretDown />
                </NavLink>
                <div className={style.hoverDiv}>
                  <NavLink to="/ilmiy-kengash">Ilmiy Kengash</NavLink>
                  <NavLink to="/xalqaro-hamkorlik">Xalqaro Hamkorlik</NavLink>
                </div>
              </div>
              <div className={style.navbarLink}>
                <NavLink to="/talabalar" activeStyle={{ color: "white" }}>
                  Talabalar <span></span>
                </NavLink>
              </div>
              <div className={style.navbarLink}>
                <NavLink to="/qabul" activeStyle={{ color: "white" }}>
                  Qabul <span></span>
                </NavLink>
              </div>
              <div className={style.navbarLink}>
                <NavLink to="/bizhaqimizda" activeStyle={{ color: "white" }}>
                  Biz haqimizda <span></span>
                </NavLink>
              </div>
              <div className={style.navbarLink}>
                <NavLink to="/aloqa" activeStyle={{ color: "white" }}>
                  Aloqa <span></span>
                </NavLink>
              </div>
            </div>
          </div>
          <div className={style.languageBlock}>
            <div className={style.languageBox}>
              <NavLink to="/" activeStyle={{ color: "white" }}>
                UZB
              </NavLink>
            </div>
            <div className={style.languageBox}>
              <NavLink to="/rus" activeStyle={{ color: "white" }}>
                RUS
              </NavLink>
            </div>
            <div className={style.languageBox}>
              <NavLink to="eng" activeStyle={{ color: "white" }}>
                ENG
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
