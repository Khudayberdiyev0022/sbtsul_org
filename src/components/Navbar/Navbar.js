import React, { useEffect, useState } from "react";
import style from "./Navbar.module.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/icons/logoFT.svg";
import {
  AiFillCaretDown,
  AiOutlineInstagram,
  AiTwotoneHome,
} from "react-icons/ai";
import { FaFacebook, FaYoutube, FaTelegram, FaTwitter } from "react-icons/fa";
import { connect } from "react-redux";
import { changeLanguage } from "../../actions";

function Navbar(props) {
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
    if (window.location.pathname.includes("admin")) {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
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
                  rel="norefer"
                  traget="_blank"
                  href="/"
                  className={style.icon}
                >
                  <AiOutlineInstagram />
                </a>
                <a
                  rel="norefer"
                  traget="_blank"
                  href="/"
                  className={style.icon}
                >
                  <FaFacebook />
                </a>
                <a
                  rel="norefer"
                  traget="_blank"
                  href="/"
                  className={style.icon}
                >
                  <FaYoutube />
                </a>
                <a
                  rel="norefer"
                  traget="_blank"
                  href="/"
                  className={style.icon}
                >
                  <FaTelegram />
                </a>
                <a
                  rel="norefer"
                  traget="_blank"
                  href="/"
                  className={style.icon}
                >
                  <FaTwitter />
                </a>
              </div>
              <div className={style.us}>
                <a href="tel://+998 71 20703 78" rel="norefer" traget="_blank">
                  +998 71 20703 78
                </a>
                <a href="mailto://info@sbtsul.uz" rel="norefer" traget="_blank">
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
                    UZB
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
                    RUS
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
                    ENG
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
                {/* <div className={style.home}> */}
                <Link className={style.home} to="/">
                  <AiTwotoneHome />
                </Link>
                {/* </div> */}
                <div className={style.navbarLink}>
                  <NavLink
                    to="/filial"
                    activeStyle={{ color: "rgb(2 162 255)" }}
                  >
                    Filial <span></span>
                  </NavLink>
                </div>
                <div className={style.navbarLink}>
                  <NavLink
                    to="/tuzilma"
                    activeStyle={{ color: "rgb(2 162 255)" }}
                  >
                    Tuzilma <span></span>
                    <AiFillCaretDown />
                  </NavLink>
                  <div className={style.hoverDiv}>
                    <NavLink to="/kengash">Kengash</NavLink>
                    <NavLink to="/rahbariyat">Rahbariyat</NavLink>
                    {/* <NavLink to="/direktorat">Direktorat</NavLink> */}
                    <NavLink to="/dekanatlar">Dekanatlar</NavLink>
                    <NavLink to="/kafedralar">Kafedralar</NavLink>
                    <NavLink to="/bolimlar">Bo'limlar</NavLink>
                    <NavLink to="/axborot-resurs-markazi">
                      Axborot Resurs markazi
                    </NavLink>
                  </div>
                </div>
                <div className={style.navbarLink}>
                  {/* /Link ='/faoliyat' */}
                  <NavLink
                    to="/faoliyat"
                    activeStyle={{ color: "rgb(2 162 255)" }}
                  >
                    Faoliyat <span></span>
                    <AiFillCaretDown />
                  </NavLink>
                  <div className={style.hoverDiv}>
                    <NavLink to="/ilmiy-kengash">Ilmiy Kengash</NavLink>
                    <NavLink to="/xalqaro-hamkorlik">Xalqaro Hamkorlik</NavLink>
                  </div>
                </div>
                <div className={style.navbarLink}>
                  <NavLink
                    to="/talabalar"
                    activeStyle={{ color: "rgb(2 162 255)" }}
                  >
                    Talabalar <span></span>
                  </NavLink>
                </div>
                <div className={style.navbarLink}>
                  <NavLink
                    to="/qabul"
                    activeStyle={{ color: "rgb(2 162 255)" }}
                  >
                    Qabul <span></span>
                  </NavLink>
                </div>
                <div className={style.navbarLink}>
                  <NavLink
                    to="/bizhaqimizda"
                    activeStyle={{ color: "rgb(2 162 255)" }}
                  >
                    Biz haqimizda <span></span>
                  </NavLink>
                </div>
                <div className={style.navbarLink}>
                  <NavLink
                    to="/aloqa"
                    activeStyle={{ color: "rgb(2 162 255)" }}
                  >
                    Aloqa <span></span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.logoContainer}>
          <div
            className={style.logo}
            style={{ backgroundImage: `url(${logo})` }}
          ></div>
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

export default connect(mapStateToProps, { changeLanguage })(Navbar);
