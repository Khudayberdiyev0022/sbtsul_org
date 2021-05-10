import React, { Fragment, useState } from "react";
import style from "../../components/Qabul/Qabul3.module.css";
import { props } from "../../components/Qabul/Props";

const initialState = props;
function Qabul3() {
  const [names, setNames] = useState(initialState);
  console.log(setNames);

  return (
    <Fragment>
      <div className={style.main}>
        <h1>Результаты конкурса, проведенного 18-19 декабря 2019 года</h1>
        <h3 className={style.header}>
          Специализированный филиал Ташкентского государственного юридического
          университета курс переподготовки проведен 18-19 декабря 2019 года
          результаты конкурса
        </h3>
        <table
          className={style.table}
          style={{ width: "100%", textAlign: "center" }}
        >
          <thead className={style.border}>
            <tr
              style={{ background: "#0F2B53", color: "#fff" }}
              className={style.border}
            >
              <th>T/r</th>
              <th className={style.border}>Tinglovchining F.I.Sh.</th>
              <th className={style.border}>Jami to'plangan ball</th>
            </tr>
          </thead>
          <tbody className={style.border}>
            {names.map((name, index) => {
              if (index > 70) {
                return (
                  <tr style={{ background: "#FF736E" }} key={index}>
                    <td className={style.border}>{index + 1}</td>
                    <td className={style.border}>{name.name}</td>
                    <td className={style.border}>{name.ball}</td>
                  </tr>
                );
              } else {
                return (
                  <tr style={{ background: "lightgreen" }} key={index}>
                    <td className={style.border}>{index + 1}</td>
                    <td className={style.border}>{name.name}</td>
                    <td className={style.border}>{name.ball}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}

export default Qabul3;
