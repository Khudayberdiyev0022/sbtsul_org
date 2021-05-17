import React, { Fragment, useState, useEffect } from "react";
import style from "./News.module.css";
import {
  fetchQuotasProducts,
  selectedAnyItem,
  ReadQuota,
} from "../../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LoaderComponent from "../main-parts/Loader";

function Grants(props) {
  const [name, setName] = useState("");

  useEffect(() => {
    props.fetchQuotasProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const listRender = () => {
    if (name.length > 0) {
      return props.quotas ? (
        props.quotas.map(
          (quota, id) =>
            quota.titleUzb.toLowerCase().includes(name.toLowerCase()) && (
              <div key={quota.id} className={style.tableDetail}>
                <h2>{id}</h2>
                <h2>
                  {quota.titleUzb.split("").length > 20
                    ? quota.titleUzb.slice(0, 20)
                    : quota.titleUzb}
                </h2>
                <h2>
                  {quota.numberOfAllQuotasUzb.split("").length > 30
                    ? quota.numberOfAllQuotasUzb.slice(0, 30)
                    : quota.numberOfAllQuotasUzb}
                </h2>
                <h2>
                  {quota.date.split("").length > 15
                    ? quota.date.slice(0, 15)
                    : quota.date}
                </h2>
                <div className={style.twoButtons}>
                  {props.admin.quotasPermission === "TRUE" && (
                    <Link
                      to="/admin/delete/quotas"
                      onClick={() => props.selectedAnyItem(quota)}
                    >
                      Удалить
                    </Link>
                  )}
                  {props.admin.quotasPermission === "TRUE" && (
                    <Link
                      to="/admin/edit/quotas"
                      onClick={() => props.selectedAnyItem(quota)}
                    >
                      {" "}
                      Изменить
                    </Link>
                  )}
                  {props.admin.quotasPermission === "TRUE" && (
                    <Link
                      to="/admin/read/quotas"
                      onClick={() => props.ReadQuota(quota)}
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
      return props.quotas ? (
        props.quotas.map((quota, id) => {
          if (quota.id) {
            return (
              <div key={quota.id} className={style.tableDetail}>
                <h2>{id}</h2>
                <h2>
                  {quota.titleUzb.split("").length > 20
                    ? quota.titleUzb.slice(0, 20)
                    : quota.titleUzb}
                </h2>
                <h2>
                  {quota.numberOfAllQuotasUzb.split("").length > 30
                    ? quota.numberOfAllQuotasUzb.slice(0, 30)
                    : quota.numberOfAllQuotasUzb}
                </h2>
                <h2>
                  {quota.date.split("").length > 15
                    ? quota.date.slice(0, 15)
                    : quota.date}
                </h2>
                <div className={style.twoButtons}>
                  {props.admin.quotasPermission === "TRUE" && (
                    <Link
                      to="/admin/delete/quotas"
                      onClick={() => props.selectedAnyItem(quota)}
                    >
                      Удалить
                    </Link>
                  )}
                  {props.admin.quotasPermission === "TRUE" && (
                    <Link
                      to="/admin/edit/quotas"
                      onClick={() => props.selectedAnyItem(quota)}
                    >
                      {" "}
                      Изменить
                    </Link>
                  )}
                  {props.admin.quotasPermission === "TRUE" && (
                    <Link
                      to="/admin/read/quotas"
                      onClick={() => props.ReadQuota(quota)}
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
            <h2>Приём</h2>
            <div className={style.buttons}>
              <input
                type="text"
                placeholder="Поиск"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {props.admin.quotasPermission === "TRUE" && (
                <button type="button">
                  <Link
                    to="/admin/add/quotas"
                    onClick={() => props.selectedAnyItem("yesss")}
                  >
                    Добавить приём
                  </Link>
                </button>
              )}
            </div>
          </div>
          <div className={style.table}>
            <h2>ID</h2>
            <h2>Загаловок</h2>
            <h2>Общый квоты</h2>
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
    quotas: state.productsQuotas[0],
    admin: state.admin[0],
  };
};
export default connect(mapStateToProps, {
  fetchQuotasProducts,
  selectedAnyItem,
  ReadQuota,
})(Grants);
