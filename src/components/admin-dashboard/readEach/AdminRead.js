import React from "react";
import style from "./Style.module.css";
import { connect } from "react-redux";
import NotFound from "../main-parts/404";
import { Link } from "react-router-dom";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

function AdminRead(props) {
  console.log(props.admin);

  if (!props.admin) {
    return <NotFound />;
  }

  return (
    <div className={style.main}>
      <div className={style.container}>
        <h1>Информация об Админе</h1>
        <div className={style.content}>
          <h1>Основные Информации</h1>
          <h2>
            <span>Имя: </span> {props.information.name}
          </h2>
          <h2>
            <span>Пароль: </span> {props.information.password}
          </h2>
          <div className={style.sections}>
            <h1>Разделы</h1>
            <h2>
              <span>Фото:</span>{" "}
              {props.information.imagesPermission === "TRUE" ? (
                <AiOutlineCheck style={{ fill: "lime" }} />
              ) : (
                <AiOutlineClose style={{ fill: "red" }} />
              )}
            </h2>
            <h2>
              <span>Сообщения:</span>{" "}
              {props.information.messagesPermission === "TRUE" ? (
                <AiOutlineCheck style={{ fill: "lime" }} />
              ) : (
                <AiOutlineClose style={{ fill: "red" }} />
              )}
            </h2>
            <h2>
              <span>Новости:</span>{" "}
              {props.information.newsPermission === "TRUE" ? (
                <AiOutlineCheck style={{ fill: "lime" }} />
              ) : (
                <AiOutlineClose style={{ fill: "red" }} />
              )}
            </h2>
            <h2>
              <span>Квоты:</span>{" "}
              {props.information.quotasPermission === "TRUE" ? (
                <AiOutlineCheck style={{ fill: "lime" }} />
              ) : (
                <AiOutlineClose style={{ fill: "red" }} />
              )}
            </h2>
            <h2>
              <span>Студенты:</span>{" "}
              {props.information.studentsPermission === "TRUE" ? (
                <AiOutlineCheck style={{ fill: "lime" }} />
              ) : (
                <AiOutlineClose style={{ fill: "red" }} />
              )}
            </h2>
            <h2>
              <span>Вакансия:</span>{" "}
              {props.information.vacancysPermission === "TRUE" ? (
                <AiOutlineCheck style={{ fill: "lime" }} />
              ) : (
                <AiOutlineClose style={{ fill: "red" }} />
              )}
            </h2>
            <h2>
              <span>Админ:</span>{" "}
              {props.information.adminsPermission === "TRUE" ? (
                <AiOutlineCheck style={{ fill: "lime" }} />
              ) : (
                <AiOutlineClose style={{ fill: "red" }} />
              )}
            </h2>
          </div>
        </div>
        <Link to="/admin">Главная страница</Link>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    information: state.read[0],
    admin: state.admin[0],
  };
};

export default connect(mapStateToProps, null)(AdminRead);
