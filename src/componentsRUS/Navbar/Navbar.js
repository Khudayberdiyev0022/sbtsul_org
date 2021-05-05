import React, { useEffect, useState } from "react";
import style from "./Navbar.module.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/icons/logoFT.svg";
import { AiFillCaretDown, AiOutlineInstagram, AiTwotoneHome } from "react-icons/ai";
import { FaFacebook, FaYoutube, FaTelegram, FaTwitter } from "react-icons/fa";
import { connect } from "react-redux";
import { changeLanguage } from "../../actions";

function NavbarRus(props) {
  console.log(props);
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
              <Link
                  className={style.home}
                  to="/rus"
                  activeStyle={{ color: "rgb(2 162 255)" }}
                >
                  <AiTwotoneHome />
                </Link>
                <div className={style.navbarLink}>
                  <NavLink
                    to="/rus/filial"
                    activeStyle={{ color: "rgb(2 162 255)" }}
                  >
                    Филиал <span></span>
                  </NavLink>
                </div>
                <div className={style.navbarLink}>
                  <NavLink
                    to="/rus/tuzilma"
                    activeStyle={{ color: "rgb(2 162 255)" }}
                  >
                    Структура <span></span>
                    <AiFillCaretDown />
                  </NavLink>
                  <div className={style.hoverDiv}>
                    <NavLink to="/rus/kengash">Совет</NavLink>
                    <NavLink to="/rus/rahbariyat">Руководство</NavLink>
                    {/* <NavLink to="/rus/direktorat">Direktorat</NavLink> */}
                    <NavLink to="/rus/dekanatlar">Деканаты</NavLink>
                    <NavLink to="/rus/kafedralar">Кафедры</NavLink>
                    <NavLink to="/rus/bolimlar">Отделы</NavLink>
                    <NavLink to="/rus/axborot-resurs-markazi">
                      Информационно-ресурсный центр
                    </NavLink>
                  </div>
                </div>
                <div className={style.navbarLink}>
                  {/* /Link ='/faoliyat' */}
                  <NavLink
                    to="/rus/faoliyat"
                    activeStyle={{ color: "rgb(2 162 255)" }}
                  >
                    Деятельность <span></span>
                    <AiFillCaretDown />
                  </NavLink>
                  <div className={style.hoverDiv}>
                    <NavLink to="/rus/ilmiy-kengash">
                      Научная Деятельность
                    </NavLink>
                    <NavLink to="/rus/xalqaro-hamkorlik">
                      Международное Сотрудничество
                    </NavLink>
                  </div>
                </div>
                <div className={style.navbarLink}>
                  <NavLink
                    to="/rus/talabalar"
                    activeStyle={{ color: "rgb(2 162 255)" }}
                  >
                    Студенты <span></span>
                  </NavLink>
                </div>
                <div className={style.navbarLink}>
                  <NavLink
                    to="/rus/qabul"
                    activeStyle={{ color: "rgb(2 162 255)" }}
                  >
                    Приём <span></span>
                  </NavLink>
                </div>
                <div className={style.navbarLink}>
                  <NavLink
                    to="/rus/bizhaqimizda"
                    activeStyle={{ color: "rgb(2 162 255)" }}
                  >
                    О нас <span></span>
                  </NavLink>
                </div>
                <div className={style.navbarLink}>
                  <NavLink
                    to="/rus/aloqa"
                    activeStyle={{ color: "rgb(2 162 255)" }}
                  >
                    Контакт <span></span>
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


export default connect(mapStateToProps, { changeLanguage })(NavbarRus);
