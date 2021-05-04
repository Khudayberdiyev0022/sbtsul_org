import React, { Fragment, useState } from "react";
import Style from "./Qabul3.module.css";
import { props } from "./Props";

const initialState = props;
function Qabul3() {
  const [names, setNames] = useState(initialState);
  console.log(setNames);

  return (
    <Fragment>
      <div className={Style.main}>
        <h1>Результаты конкурса, проведенного 18-19 декабря 2019 года</h1>
        <h3 className={Style.header}>
        Специализированный филиал Ташкентского государственного юридического университета
 курс переподготовки проведен 18-19 декабря 2019 года
 результаты конкурса
        </h3>
        <table
          className={Style.table}
          style={{ width: "100%", textAlign: "center" }}
        >
          <thead className={Style.border}>
            <tr
              style={{ background: "#0F2B53", color: "#fff" }}
              className={Style.border}
            >
              <th>T/r</th>
              <th className={Style.border}>Tinglovchining F.I.Sh.</th>
              <th className={Style.border}>Jami to'plangan ball</th>
            </tr>
          </thead>
          <tbody className={Style.border}>
            {names.map((name, index) => {
              if (index > 70) {
                return (
                  <tr style={{ background: "#FF736E" }} key={index}>
                    <td className={Style.border}>{index + 1}</td>
                    <td className={Style.border}>{name.name}</td>
                    <td className={Style.border}>{name.ball}</td>
                  </tr>
                );
              } else {
                return (
                  <tr style={{ background: "lightgreen" }} key={index}>
                    <td className={Style.border}>{index + 1}</td>
                    <td className={Style.border}>{name.name}</td>
                    <td className={Style.border}>{name.ball}</td>
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
