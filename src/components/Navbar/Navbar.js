import React, { useEffect, useState } from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/logoFT.svg";
import { AiFillCaretDown, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook, FaYoutube, FaTelegram, FaTwitter } from "react-icons/fa";
import { connect } from "react-redux";
import { changeLanguage } from "../../actions";

function Navbar(props) {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      console.log(window.scrollY);
      if (window.scrollY > 300) {
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

export default connect(null, { changeLanguage })(Navbar);
