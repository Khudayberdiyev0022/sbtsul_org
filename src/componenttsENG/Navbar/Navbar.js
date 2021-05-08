import React, { useEffect, useState } from "react";
import style from "./Navbar.module.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/icons/logoFT.svg";
import {
  AiFillCaretDown,
  AiOutlineInstagram,
  AiTwotoneHome,
  AiOutlineMail,
} from "react-icons/ai";
import { FaFacebook, FaYoutube, FaTelegram } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { connect } from "react-redux";
import { changeLanguage } from "../../actions";

import uzbekistan from "../../assets/img/uzbekistan.gif";
import russia from "../../assets/img/russia.gif";
import england from "../../assets/img/england.gif";

function NavbarEng(props) {
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
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    const checker = () => {
      if (window.location.pathname.includes("admin")) {
        setAdmin(true);
      } else {
        setAdmin(false);
      }
    };
    checker();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // style.links
  if (admin) {
    return null;
  } else {
    return (
      <div className={style.main}>
        <div className={style.containerMain}>
          <div
            className={
              scroll
                ? `${style.socialmedia} ${style.socialMediaScroll}`
                : `${style.socialmedia} ${style.socialMediaNotScroll}`
            }
          >
            {/* <div className={style.content}> */}

            <div className={style.container}>
              <div className={style.social}>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.instagram.com/sbtsul.uz/"
                  className={style.icon}
                >
                  <AiOutlineInstagram />
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://fb.me/sbtsul"
                  className={style.icon}
                >
                  <FaFacebook />
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="/"
                  className={style.icon}
                >
                  <FaYoutube />
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://t.me/TDYU_ixtisoslashtirilgan_filiali"
                  className={style.icon}
                >
                  <FaTelegram />
                </a>
              </div>
              <div className={style.us}>
                <a href="tel://+998 71 20703 78" rel="norefer" traget="_blank">
                  <FiPhone />
                  +998 71 20703 78
                </a>
                <a href="mailto://info@sbtsul.uz" rel="norefer" traget="_blank">
                  <AiOutlineMail />
                  info@sbtsul.uz
                </a>
              </div>
              <div className={style.language}>
                <div
                  className={
                    props.language === "UZB"
                      ? style.languageBoxActive
                      : style.languageBox
                  }
                >
                  <NavLink onClick={() => props.changeLanguage("UZB")} to="/">
                    <img src={uzbekistan} alt="uzbekistan" />
                  </NavLink>
                </div>
                <div
                  className={
                    props.language === "RUS"
                      ? style.languageBoxActive
                      : style.languageBox
                  }
                >
                  <NavLink
                    onClick={() => props.changeLanguage("RUS")}
                    to="/rus"
                  >
                    <img src={russia} alt="russia" />
                  </NavLink>
                </div>
                <div
                  className={
                    props.language === "ENG"
                      ? style.languageBoxActive
                      : style.languageBox
                  }
                >
                  <NavLink
                    onClick={() => props.changeLanguage("ENG")}
                    to="/eng"
                  >
                    <img src={england} alt="england" />
                  </NavLink>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
          <div
            className={
              scroll
                ? `${style.links} ${style.linksScroll}`
                : `${style.links} ${style.linksNotScroll}`
            }
          >
            <div className={style.container}>
              <div className={style.titleName}>
                <Link className={style.home} to="/eng">
                  <AiTwotoneHome />
                </Link>
                <div className={style.navbarLink}>
                  <NavLink
                    to="/eng/filial"
                    activeStyle={{ color: "rgb(2 162 255)" }}
                  >
                    Branch <span></span>
                  </NavLink>
                </div>
                <div className={style.navbarLink}>
                  <NavLink
                    to="/eng/tuzilma"
                    activeStyle={{ color: "rgb(2 162 255)" }}
                  >
                    Structure <span></span>
                    <AiFillCaretDown />
                  </NavLink>
                  <div className={style.hoverDiv}>
                    <NavLink to="/eng/kengash">Council</NavLink>
                    <NavLink to="/eng/rahbariyat">Director</NavLink>
                    <NavLink to="/eng/dekanatlar">Dean's offices</NavLink>
                    <NavLink to="/eng/kafedralar">Chairs</NavLink>
                    <NavLink to="/eng/bolimlar">Sections</NavLink>
                    <NavLink to="/eng/axborot-resurs-markazi">
                      Information Resource Center
                    </NavLink>
                  </div>
                </div>
                <div className={style.navbarLink}>
                  <NavLink to="/eng" activeStyle={{ color: "rgb(2 162 255)" }}>
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
                  <NavLink
                    to="/eng/talabalar"
                    activeStyle={{ color: "rgb(2 162 255)" }}
                  >
                    Students <span></span>
                  </NavLink>
                </div>
                <div className={style.navbarLink}>
                  <NavLink
                    to="/eng/qabul"
                    activeStyle={{ color: "rgb(2 162 255)" }}
                  >
                    Acceptance <span></span>
                  </NavLink>
                </div>
                <div className={style.navbarLink}>
                  <NavLink
                    to="/eng/bizhaqimizda"
                    activeStyle={{ color: "rgb(2 162 255)" }}
                  >
                    About Us <span></span>
                  </NavLink>
                </div>
                <div className={style.navbarLink}>
                  <NavLink
                    to="/eng/aloqa"
                    activeStyle={{ color: "rgb(2 162 255)" }}
                  >
                    Contact <span></span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.logoContainer}>
          <Link to="/eng">
            <div
              className={style.logo}
              style={{ backgroundImage: `url(${logo})` }}
            ></div>
          </Link>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    language: state.language,
  };
};

export default connect(mapStateToProps, { changeLanguage })(NavbarEng);
