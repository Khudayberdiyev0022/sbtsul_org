import React, { Fragment, useState, useEffect } from "react";
import style from "./News.module.css";
import {
  fetchVacancysProducts,
  selectedAnyItem,
  ReadQuota,
} from "../../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LoaderComponent from "../main-parts/Loader";

function Vacancys(props) {
  const [name, setName] = useState("");

  useEffect(() => {
    props.fetchVacancysProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const listRender = () => {
    if (name.length > 0) {
      return props.vacancys ? (
        props.vacancys.map(
          (vacancy, id) =>
            vacancy.titleUzb.toLowerCase().includes(name.toLowerCase()) && (
              <div key={vacancy.id} className={style.tableDetail}>
                <h2>{id}</h2>
                <h2>
                  {vacancy.titleUzb.split("").length > 20
                    ? vacancy.titleUzb.slice(0, 20)
                    : vacancy.titleUzb}
                </h2>
                <h2>
                  {vacancy.paragraphUzb.split("").length > 30
                    ? vacancy.paragraphUzb.slice(0, 30)
                    : vacancy.paragraphUzb}
                </h2>
                <h2>
                  {vacancy.date.split("").length > 15
                    ? vacancy.date.slice(0, 15)
                    : vacancy.date}
                </h2>
                <div className={style.twoButtons}>
                  {props.admin.vacancysPermission === "TRUE" && (
                    <Link
                      to="/admin/delete/vacancys"
                      onClick={() => props.selectedAnyItem(vacancy)}
                    >
                      Удалить
                    </Link>
                  )}
                  {props.admin.vacancysPermission === "TRUE" && (
                    <Link
                      to="/admin/edit/vacancys"
                      onClick={() => props.selectedAnyItem(vacancy)}
                    >
                      {" "}
                      Изменить
                    </Link>
                  )}
                  {props.admin.vacancysPermission === "TRUE" && (
                    <Link
                      to="/admin/read/vacancys"
                      onClick={() => props.ReadQuota(vacancy)}
                    >
                      {" "}
                      Подробно
                    </Link>
                  )}
                </div>
              </div>
            )
        )
      ) : (
        <LoaderComponent />
      );
    } else {
      return props.vacancys ? (
        props.vacancys.map((vacancy, id) => {
          if (vacancy.id) {
            return (
              <div key={vacancy.id} className={style.tableDetail}>
                <h2>{id}</h2>
                <h2>
                  {vacancy.titleUzb.split("").length > 20
                    ? vacancy.titleUzb.slice(0, 20)
                    : vacancy.titleUzb}
                </h2>
                <h2>
                  {vacancy.paragraphUzb.split("").length > 30
                    ? vacancy.paragraphUzb.slice(0, 30)
                    : vacancy.paragraphUzb}
                </h2>
                <h2>
                  {vacancy.date.split("").length > 15
                    ? vacancy.date.slice(0, 15)
                    : vacancy.date}
                </h2>
                <div className={style.twoButtons}>
                  {props.admin.vacancysPermission === "TRUE" && (
                    <Link
                      to="/admin/delete/vacancys"
                      onClick={() => props.selectedAnyItem(vacancy)}
                    >
                      Удалить
                    </Link>
                  )}
                  {props.admin.vacancysPermission === "TRUE" && (
                    <Link
                      to="/admin/edit/vacancys"
                      onClick={() => props.selectedAnyItem(vacancy)}
                    >
                      {" "}
                      Изменить
                    </Link>
                  )}
                  {props.admin.vacancysPermission === "TRUE" && (
                    <Link
                      to="/admin/read/vacancys"
                      onClick={() => props.ReadQuota(vacancy)}
                    >
                      {" "}
                      Подробно
                    </Link>
                  )}
                </div>
              </div>
            );
          } else {
            return <h1 style={{ position: "absolute" }}>No Students yet</h1>;
          }
        })
      ) : (
        <LoaderComponent />
      );
    }
  };

  return (
    <div className={style.main}>
      <div className={style.container}>
        <Fragment>
          <div className={style.searcher}>
            <h2>Вакансия</h2>
            <div className={style.buttons}>
              <input
                type="text"
                placeholder="Поиск"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {props.admin.vacancysPermission === "TRUE" && (
                <button type="button">
                  <Link
                    to="/admin/add/vacancys"
                    onClick={() => props.selectedAnyItem("yesss")}
                  >
                    Добавить вакансия
                  </Link>
                </button>
              )}
            </div>
          </div>
          <div className={style.table}>
            <h2>ID</h2>
            <h2>Загаловок</h2>
            <h2>Описания</h2>
            <h2>Дата</h2>
            <div className={style.twoButtons}></div>
          </div>
          {listRender()}
        </Fragment>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    vacancys: state.productsVacancys[0],
    admin: state.admin[0],
  };
};
export default connect(mapStateToProps, {
  fetchVacancysProducts,
  selectedAnyItem,
  ReadQuota,
})(Vacancys);
