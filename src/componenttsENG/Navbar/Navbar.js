import React, { useEffect, useState } from "react";
import style from "./Navbar.module.css";
import logo from "../../assets/icons/logoFT.svg";
import { NavLink } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import { connect } from "react-redux";
import { changeLanguage } from "../../actions";

const NavbarEng = (props) => {
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
            <NavLink to="/eng/" activeStyle={{ color: "#0f2b53" }}>
              <img src={logo} alt="logo" />
            </NavLink>
            <div className={style.titleAll}>
              <h2>TASHKENT STATE LAW UNIVERSITY SPECIALIZED <br /> BRANCHES</h2>
              <div className={style.titleName}>
                <div className={style.navbarLink}>
                  <NavLink to="/eng/filial" activeStyle={{ color: "white" }}>
                    Filial <span></span>
                  </NavLink>
                </div>
                <div className={style.navbarLink}>
                  <NavLink to="/eng/tuzilma" activeStyle={{ color: "white" }}>
                    Structure <span></span>
                    <AiFillCaretDown />
                  </NavLink>
                  <div className={style.hoverDiv}>
                    <NavLink to="/eng/kengash">Council</NavLink>
                    <NavLink to="/eng/rahbariyat">Leadership</NavLink>
                    {/* <NavLink to="/direktorat">Direktorat</NavLink> */}
                    <NavLink to="/eng/dekanatlar">Dean's offices</NavLink>
                    <NavLink to="/eng/kafedralar">Chairs</NavLink>
                    <NavLink to="/eng/bolimlar">Sections</NavLink>
                    <NavLink to="/eng/axborot-resurs-markazi">
                      Information Resource Center
                    </NavLink>
                  </div>
                </div>
                <div className={style.navbarLink}>
                  <NavLink to="/eng/faoliyat" activeStyle={{ color: "white" }}>
                    Activity <span></span>
                    <AiFillCaretDown />
                  </NavLink>
                  <div className={style.hoverDiv}>
                    <NavLink to="/eng/ilmiy-kengash">
                      Scientific Council
                    </NavLink>
                    <NavLink to="/eng/xalqaro-hamkorlik">
                      International Cooperation
                    </NavLink>
                  </div>
                </div>
                <div className={style.navbarLink}>
                  <NavLink to="/eng/talabalar" activeStyle={{ color: "white" }}>
                    Students <span></span>
                  </NavLink>
                </div>
                <div className={style.navbarLink}>
                  <NavLink to="/eng/qabul" activeStyle={{ color: "white" }}>
                    Acceptance <span></span>
                  </NavLink>
                </div>
                <div className={style.navbarLink}>
                  <NavLink
                    to="/eng/bizhaqimizda"
                    activeStyle={{ color: "white" }}
                  >
                    About Us<span></span>
                  </NavLink>
                </div>
                <div className={style.navbarLink}>
                  <NavLink to="/eng/aloqa" activeStyle={{ color: "white" }}>
                    Communication <span></span>
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

export default connect(null, { changeLanguage })(NavbarEng);
