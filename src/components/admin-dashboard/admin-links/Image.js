import React, { Fragment, useState, useEffect } from "react";
import style from "./News.module.css";
import {
  fetchImagesProducts,
  selectedAnyItem,
  ReadQuota,
} from "../../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LoaderComponent from "../main-parts/Loader";

function Images(props) {
  const [name, setName] = useState("");

  useEffect(() => {
    props.fetchImagesProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const listRender = () => {
    if (name.length > 0) {
      return props.images ? (
        props.images.map(
          (image, id) =>
            image.titleUzb.toLowerCase().includes(name.toLowerCase()) && (
              <div key={image.id} className={style.tableDetail}>
                <h2>{id}</h2>
                <h2>
                  {image.titleUzb.split("").length > 20
                    ? image.titleUzb.slice(0, 20)
                    : image.titleUzb}
                </h2>
                <h2>
                  {image.image.split("").length > 30
                    ? image.image.slice(0, 30)
                    : image.image}
                </h2>
                <h2>
                  {image.date.split("").length > 30
                    ? image.date.slice(0, 30)
                    : image.date}
                </h2>
                <div className={style.twoButtons}>
                  {props.admin.imagePermission === "TRUE" && (
                    <Link
                      to="/admin/delete/images"
                      onClick={() => props.selectedAnyItem(image)}
                    >
                      Удалить
                    </Link>
                  )}
                  {props.admin.imagePermission === "TRUE" && (
                    <Link
                      to="/admin/edit/images"
                      onClick={() => props.selectedAnyItem(image)}
                    >
                      {" "}
                      Изменить
                    </Link>
                  )}
                  {props.admin.imagePermission === "TRUE" && (
                    <Link
                      to="/admin/read/images"
                      onClick={() => props.ReadQuota(image)}
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
      return props.images ? (
        props.images.map((image, id) => {
          if (image.id) {
            return (
              <div key={image.id} className={style.tableDetail}>
                <h2>{id}</h2>
                <h2>
                  {image.titleUzb.split("").length > 20
                    ? image.titleUzb.slice(0, 20)
                    : image.titleUzb}
                </h2>
                <h2>
                  {image.image.split("").length > 30
                    ? image.image.slice(0, 30)
                    : image.image}
                </h2>
                <h2>
                  {image.date.split("").length > 30
                    ? image.date.slice(0, 30)
                    : image.date}
                </h2>
                <div className={style.twoButtons}>
                  {props.admin.imagePermission === "TRUE" && (
                    <Link
                      to="/admin/delete/images"
                      onClick={() => props.selectedAnyItem(image)}
                    >
                      Удалить
                    </Link>
                  )}
                  {props.admin.imagePermission === "TRUE" && (
                    <Link
                      to="/admin/edit/images"
                      onClick={() => props.selectedAnyItem(image)}
                    >
                      {" "}
                      Изменить
                    </Link>
                  )}
                  {props.admin.imagePermission === "TRUE" && (
                    <Link
                      to="/admin/read/images"
                      onClick={() => props.ReadQuota(image)}
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
            <h2>Фото</h2>
            <div className={style.buttons}>
              <input
                type="text"
                placeholder="Поиск"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {props.admin.imagePermission === "TRUE" && (
                <button type="button">
                  <Link
                    to="/admin/add/images"
                    onClick={() => props.selectedAnyItem("yesss")}
                  >
                    Добавить фото
                  </Link>
                </button>
              )}
            </div>
          </div>
          <div className={style.table}>
            <h2>ID</h2>
            <h2>Загаловок</h2>
            <h2>URL фото </h2>
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
    images: state.productsImages[0],
    admin: state.admin[0],
  };
};
export default connect(mapStateToProps, {
  fetchImagesProducts,
  selectedAnyItem,
  ReadQuota,
})(Images);
