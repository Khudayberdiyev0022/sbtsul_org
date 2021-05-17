import React, { useEffect, useReducer } from "react";
import { editProduct } from "../../../actions";
import { connect } from "react-redux";
import style from "./GrantEdit.module.css";
import { Link } from "react-router-dom";
import NotFound from "../main-parts/404";

const initialState = {
  nameUzb: "",
  nameRus: "",
  nameEng: "",
  informationUzb: "",
  informationRus: "",
  informationEng: "",
  email: "",
  clicked: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "NAME_UZB":
      return {
        ...state,
        nameUzb: action.payload,
      };
    case "NAME_RUS":
      return {
        ...state,
        nameRus: action.payload,
      };
    case "NAME_ENG":
      return {
        ...state,
        nameEng: action.payload,
      };
    case "INFORMATION_UZB":
      return {
        ...state,
        informationUzb: action.payload,
      };
    case "INFORMATION_RUS":
      return {
        ...state,
        informationRus: action.payload,
      };
    case "INFORMATION_ENG":
      return {
        ...state,
        informationEng: action.payload,
      };
    case "EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    case "CLEAR":
      return initialState;
    case "CLICKED":
      return {
        ...state,
        clicked: true,
      };
    default:
      return state;
  }
};

function StudentEdit(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "NAME_UZB", payload: props.item?.nameUzb });
    dispatch({ type: "NAME_RUS", payload: props.item?.nameRus });
    dispatch({ type: "NAME_ENG", payload: props.item?.nameEng });
    dispatch({ type: "INFORMATION_UZB", payload: props.item?.informationUzb });
    dispatch({ type: "INFORMATION_RUS", payload: props.item?.informationRus });
    dispatch({ type: "INFORMATION_ENG", payload: props.item?.informationEng });
    dispatch({ type: "EMAIL", payload: props.item?.email });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!props.admin) {
    return <NotFound />;
  }
  const submitHandler = (e) => {
    e.preventDefault();
    if (state.name !== "" && state.information !== "" && state.number !== "") {
      const item = {
        nameUzb: state.nameUzb,
        nameRus: state.nameRus,
        nameEng: state.nameEng,
        informationUzb: state.informationUzb,
        informationRus: state.informationRus,
        informationEng: state.informationEng,
        email: state.email,
      };
      props.editProduct("students", props.item.id, item);
    }
    dispatch({ type: "CLEAR" });
    dispatch({ type: "CLICKED" });
  };
  return (
    <div className={style.main}>
      <div className={style.container}>
        <h1>Изменить студента</h1>
        <form onSubmit={submitHandler}>
          <div className={style.forms}>
            <div className={style.block}>
              <h2>Talabaning ismi</h2>
              <input
                required
                value={state.nameUzb}
                type="text"
                onChange={(e) =>
                  dispatch({ type: "NAME_UZB", payload: e.target.value })
                }
              />
              <h2>Talaba haqida malumot</h2>
              <textarea
                required
                value={state.informationUzb}
                type="text"
                onChange={(e) =>
                  dispatch({ type: "INFORMATION_UZB", payload: e.target.value })
                }
              />
              <h2>Email</h2>
              <textarea
                required
                value={state.email}
                type="text"
                onChange={(e) =>
                  dispatch({ type: "EMAIL", payload: e.target.value })
                }
              />
            </div>
            <div className={style.block}>
              <h2>Name of student</h2>
              <input
                required
                value={state.nameEng}
                type="text"
                onChange={(e) =>
                  dispatch({ type: "NAME_ENG", payload: e.target.value })
                }
              />
              <h2>About student</h2>
              <textarea
                required
                value={state.informationEng}
                type="text"
                onChange={(e) =>
                  dispatch({ type: "INFORMATION_ENG", payload: e.target.value })
                }
              />
              <h2>Email</h2>
              <textarea
                required
                value={state.email}
                type="text"
                onChange={(e) =>
                  dispatch({ type: "EMAIL", payload: e.target.value })
                }
              />
            </div>
            <div className={style.block}>
              <h2>Имя студента</h2>
              <input
                required
                value={state.nameRus}
                type="text"
                onChange={(e) =>
                  dispatch({ type: "NAME_RUS", payload: e.target.value })
                }
              />
              <h2>Информация о студента</h2>
              <textarea
                required
                value={state.informationRus}
                type="text"
                onChange={(e) =>
                  dispatch({ type: "INFORMATION_RUS", payload: e.target.value })
                }
              />
              <h2>Email </h2>
              <textarea
                required
                value={state.email}
                type="text"
                onChange={(e) =>
                  dispatch({ type: "EMAIL", payload: e.target.value })
                }
              />
            </div>
          </div>
          <button type="submit">Выполнять</button>
        </form>
      </div>
      {state.clicked && (
        <div className={style.modal}>
          <h1>Успешно добавлено</h1>
          <button>
            <Link to="/admin">Назад</Link>
          </button>
        </div>
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    item: state.selected[0],
    admin: state.admin[0],
  };
};

export default connect(mapStateToProps, { editProduct })(StudentEdit);
