import React, { useEffect, useState } from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/logoFT.svg";
import { AiFillCaretDown, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook, FaYoutube, FaTelegram, FaTwitter } from "react-icons/fa";
import { connect } from "react-redux";
import { changeLanguage } from "../../actions";

function NavbarEng(props) {
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
                  Branch <span></span>
                  </NavLink>
                </div>
                <div className={style.navbarLink}>
                  <NavLink to="/eng/tuzilma" activeStyle={{ color: "white" }}>
                  Structure <span></span>
                    <AiFillCaretDown />
                  </NavLink>
                  <div className={style.hoverDiv}>
                    <NavLink to="/eng/kengash">Council</NavLink>
                    <NavLink to="/eng/rahbariyat">Director</NavLink>
                    {/* <NavLink to="/eng/direktorat">Direktorat</NavLink> */}
                    <NavLink to="/eng/dekanatlar">Dean's offices</NavLink>
                    <NavLink to="/eng/kafedralar">Chairs</NavLink>
                    <NavLink to="/eng/bolimlar">Sections</NavLink>
                    <NavLink to="/eng/axborot-resurs-markazi">
                    Information Resource Center
                    </NavLink>
                  </div>
                </div>
                <div className={style.navbarLink}>
                  {/* /Link ='/faoliyat' */}
                  <NavLink to="/eng/faoliyat" activeStyle={{ color: "white" }}>
                  Activity <span></span>
                    <AiFillCaretDown />
                  </NavLink>
                  <div className={style.hoverDiv}>
                    <NavLink to="/eng/ilmiy-kengash">Scientific Council</NavLink>
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
                    About Us <span></span>
                  </NavLink>
                </div>
                <div className={style.navbarLink}>
                  <NavLink to="/eng/aloqa" activeStyle={{ color: "white" }}>
                    Contact <span></span>
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

export default connect(null, { changeLanguage })(NavbarEng);
