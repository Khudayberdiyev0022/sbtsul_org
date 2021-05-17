import React, { Fragment, useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiNews, BiMessageDots } from "react-icons/bi";
import { BsBuilding } from "react-icons/bs";
import { IoPeople } from "react-icons/io5";
import style from "./Sidebar.module.css";
import { connect } from "react-redux";

import image from "../../../assets/images/logo.png";

function Sidebar(props) {
  const [sidebarOpen, setSidebarOpen] = useState(
    window.self.innerWidth > 800 ? true : false
  );
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.self.innerWidth > 800) {
        setSidebarOpen(true);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <Fragment>
      <div
        className={
          sidebarOpen
            ? `${style.main} ${style.mainOpen}`
            : `${style.main} ${style.mainClose}`
        }
      >
        <div className={style.container}>
          <AiOutlineClose onClick={() => setSidebarOpen(false)} />
          <h1 className={style.hello}>
            Добро пожаловать
            <span>
              {props.admin?.username}
              {props.admin?.name}
            </span>
          </h1>
          <div
            className={style.image}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div className={style.links}>
            <div className={style.link}>
              <BiNews />
              <h4
                className={props.clickedLink === "News" ? style.click : ""}
                onClick={() => {
                  window.self.innerWidth < 800 && setSidebarOpen(false);
                  props.clicked("News");
                }}
              >
                Новости
              </h4>
            </div>
            <div className={style.link}>
              <BiMessageDots />
              <h4
                className={props.clickedLink === "Message" ? style.click : ""}
                onClick={() => {
                  window.self.innerWidth < 800 && setSidebarOpen(false);
                  props.clicked("Message");
                }}
              >
                Сообщения
              </h4>
            </div>
            <div className={style.link}>
              <IoPeople />
              <h4
                className={props.clickedLink === "Students" ? style.click : ""}
                onClick={() => {
                  window.self.innerWidth < 800 && setSidebarOpen(false);
                  props.clicked("Students");
                }}
              >
                Студенты
              </h4>
            </div>
            <div className={style.link}>
              <BsBuilding />
              <h4
                className={props.clickedLink === "Grants" ? style.click : ""}
                onClick={() => {
                  window.self.innerWidth < 800 && setSidebarOpen(false);
                  props.clicked("Grants");
                }}
              >
                Приём
              </h4>
            </div>
            <div className={style.link}>
              <BsBuilding />
              <h4
                className={props.clickedLink === "Images" ? style.click : ""}
                onClick={() => {
                  window.self.innerWidth < 800 && setSidebarOpen(false);
                  props.clicked("Images");
                }}
              >
                Фото
              </h4>
            </div>
            <div className={style.link}>
              <BsBuilding />
              <h4
                className={props.clickedLink === "Vacancy" ? style.click : ""}
                onClick={() => {
                  window.self.innerWidth < 800 && setSidebarOpen(false);
                  props.clicked("Vacancy");
                }}
              >
                Вакансии
              </h4>
            </div>
            <div className={style.link}>
              <BsBuilding />
              <h4
                className={props.clickedLink === "Admin" ? style.click : ""}
                onClick={() => {
                  window.self.innerWidth < 800 && setSidebarOpen(false);
                  props.clicked("Admin");
                }}
              >
                Админ
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          !sidebarOpen
            ? `${style.visibleLink} ${style.visibleLinkOpen}`
            : `${style.visibleLink} ${style.visibleLinkClose}`
        }
      >
        <AiOutlineMenu onClick={() => setSidebarOpen(true)} />
      </div>
    </Fragment>
  );
}

const mapStateTProps = (state) => {
  return {
    admin: state.admin[0],
  };
};

export default connect(mapStateTProps, null)(Sidebar);
