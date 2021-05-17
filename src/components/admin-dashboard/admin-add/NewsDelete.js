import React from "react";
import { Link } from "react-router-dom";
import style from "./GrantDelete.module.css";
import { deleteProduct } from "../../../actions";
import { connect } from "react-redux";
import NotFound from "../main-parts/404";

function NewsDelete(props) {
  if (!props.admin) {
    return <NotFound />;
  }
  const del = () => {
    props.deleteProduct("news", props.item.id);
  };
  return (
    <div className={style.main}>
      <div className={style.container}>
        <h1>Хотите удалить?</h1>
        <div className={style.buttons}>
          <Link to="/admin">Назад</Link>
          <Link to="/admin" onClick={del}>
            Удалить
          </Link>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    item: state.selected[0],
    admin: state.admin[0],
  };
};

export default connect(mapStateToProps, { deleteProduct })(NewsDelete);
