import React, { useEffect, useReducer } from "react";
import { editProduct } from "../../../actions";
import { connect } from "react-redux";
import style from "./GrantEdit.module.css";
import { Link } from "react-router-dom";
import NotFound from "../main-parts/404";

const initialState = {
  titleUzb: "",
  titleRus: "",
  titleEng: "",
  paragraphUzb: "",
  paragraphRus: "",
  paragraphEng: "",
  image: "",
  clicked: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "TITLE_UZB":
      return {
        ...state,
        titleUzb: action.payload,
      };
    case "TITLE_RUS":
      return {
        ...state,
        titleRus: action.payload,
      };
    case "TITLE_ENG":
      return {
        ...state,
        titleEng: action.payload,
      };
    case "PARAGRAPH_UZB":
      return {
        ...state,
        paragraphUzb: action.payload,
      };
    case "PARAGRAPH_RUS":
      return {
        ...state,
        paragraphRus: action.payload,
      };
    case "PARAGRAPH_ENG":
      return {
        ...state,
        paragraphEng: action.payload,
      };
    case "IMAGE":
      return {
        ...state,
        image: action.payload,
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

function NewsEdit(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "TITLE_UZB", payload: props.item?.titleUzb });
    dispatch({ type: "TITLE_RUS", payload: props.item?.titleRus });
    dispatch({ type: "TITLE_ENG", payload: props.item?.titleEng });
    dispatch({ type: "PARAGRAPH_UZB", payload: props.item?.paragraphUzb });
    dispatch({ type: "PARAGRAPH_RUS", payload: props.item?.paragraphRus });
    dispatch({ type: "PARAGRAPH_ENG", payload: props.item?.paragraphEng });
    dispatch({ type: "IMAGE", payload: props.item?.image });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!props.admin) {
    return <NotFound />;
  }
  const submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("titleUzb", state.titleUzb);
    data.append("titleRus", state.titleRus);
    data.append("titleEng", state.titleEng);

    data.append("paragraphUzb", state.paragraphUzb);
    data.append("paragraphRus", state.paragraphRus);
    data.append("paragraphEng", state.paragraphEng);

    data.append("image", state.image, state.image.name);

    props.editProduct("news", props.item.id, data);

    dispatch({ type: "CLEAR" });
    dispatch({ type: "CLICKED" });
  };
  return (
    <div className={style.main}>
      <div className={style.container}>
        <h1>Изменить нвости</h1>
        <form onSubmit={submitHandler}>
          <div className={style.forms}>
            <div className={style.block}>
              <h2>Sarlavha</h2>
              <input
                required
                value={state.titleUzb}
                type="text"
                onChange={(e) =>
                  dispatch({ type: "TITLE_UZB", payload: e.target.value })
                }
              />
              <h2>Matn</h2>
              <textarea
                required
                value={state.paragraphUzb}
                type="text"
                onChange={(e) =>
                  dispatch({ type: "PARAGRAPH_UZB", payload: e.target.value })
                }
              />
            </div>
            <div className={style.block}>
              <h2>Title</h2>
              <input
                required
                value={state.titleEng}
                type="text"
                onChange={(e) =>
                  dispatch({ type: "TITLE_ENG", payload: e.target.value })
                }
              />
              <h2>Paragraph</h2>
              <textarea
                required
                value={state.paragraphEng}
                type="text"
                onChange={(e) =>
                  dispatch({ type: "PARAGRAPH_ENG", payload: e.target.value })
                }
              />
            </div>
            <div className={style.block}>
              <h2>Заголовок</h2>
              <input
                required
                value={state.titleRus}
                type="text"
                onChange={(e) =>
                  dispatch({ type: "TITLE_RUS", payload: e.target.value })
                }
              />
              <h2>Параграф</h2>
              <textarea
                required
                value={state.paragraphRus}
                type="text"
                onChange={(e) =>
                  dispatch({ type: "PARAGRAPH_RUS", payload: e.target.value })
                }
              />
            </div>
          </div>
          <h2>Адресс картинки</h2>
          <input
            className={style.addInput}
            required
            name="file"
            type="file"
            onChange={(e) =>
              dispatch({ type: "IMAGE", payload: e.target.files[0] })
            }
          />
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

export default connect(mapStateToProps, { editProduct })(NewsEdit);
