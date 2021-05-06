import React from "react";
import style from "./Vakansiya.module.css";

const VakansiyaEng = () => {
  const apis = [
    {
      job: "Teachers for english lessons",
      salary: "2 000 000",
      aboutJob1:
        "Officia magna eu excepteur exercitation consectetur consectetur aliqua elit. Fugiat sunt aute reprehenderit cupidatat id sint. Laborum aliquip minim eu amet nisi ullamco sit officia adipisicing eiusmod cupidatat. Excepteur eu tempor fugiat veniam laboris id tempor. Ad aute et veniam est ex dolor eu ea cillum deserunt officia laborum laborum.",
      tel: "+998712505050",
    },
    {
      job: "Teachers for english lessons",
      salary: "2 000 000",
      aboutJob1:
        "Lorem non aute proident aliqua enim. Enim tempor aliquip incididunt tempor consequat consequat sunt occaecat consequat tempor. Reprehenderit sint sit eiusmod exercitation dolor officia id est quis magna.",
      tel: "+998712505050",
    },
    {
      job: "Teachers for english lessons",
      salary: "2 000 000",
      aboutJob1:
        "Id consequat nulla consequat non laborum ad. Voluptate amet velit excepteur aliquip do incididunt incididunt consequat commodo officia sint do mollit exercitation. Eiusmod consectetur minim eiusmod mollit aliqua. Eu do aliquip tempor cillum officia enim mollit velit eiusmod ad ut sunt anim esse. Pariatur cupidatat laborum culpa eu id eu ad dolore veniam deserunt nostrud. Quis voluptate qui ex occaecat eu sunt dolor aute aute do. Ex adipisicing mollit cillum aute nisi ut elit ut cupidatat voluptate aliqua laborum velit sint.",
      tel: "+998712505050",
    },
  ];

  return (
    <div className={style.main}>
      <div className={style.inMain}>
        {apis.map((api, index) => {
          return (
            <div className={style.card} key={index}>
              <div className={style.job}>
                <h3>{api.job}</h3>
                <h3>
                  <span> Salary:</span> {api.salary} <span>sum</span>
                </h3>
              </div>
              <p>{api.aboutJob1}</p>
              <a href={`tel://${api.tel}`} rel="noreferrer" target="_blank">
                <span>tel:</span> {api.tel}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VakansiyaEng;
