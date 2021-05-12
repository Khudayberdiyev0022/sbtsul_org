import React from "react";
import style from "../../../../../components/Tuzilma/Kafedralar/Jangovor/Components/Jangovor3.module.css";

const Jangovor3 = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        <div className={style.head}>
          <h2>OBJECTIVES OF THE DEPARTMENT</h2>
          <span></span>
        </div>
        <div className={style.grid}>
          <div className={style.block}>
            <div className={style.svg}></div>
            <p>
              <span>In the field of scientific and methodological work </span> –
              the development of scientific and methodological foundations of
              the educational process, the provision of educational materials,
              the study of foreign experience in this area, the use of modern
              technologies to increase the effectiveness and quality and
              efficiency of education, the introduction of modern educational
              technologies;
            </p>
          </div>
          <div className={style.block}>
            <div className={style.svg}></div>
            <p>
              <span>in the field of scientific work</span> – conducting a study
              of the priorities of the socio-economic, democratic, judicial and
              military reform in the country, taking into account the best
              international experience and international standards, the
              priorities of modern legal science and ensuring their results,
              their implementation in practice;
            </p>
          </div>
          <div className={style.block}>
            <div className={style.svg}></div>
            <p>
              <span>
                in the field of organizational and methodological work
              </span>{" "}
              – assessment of the quality of education, its comprehensive
              analysis, effective organization of methodological and advisory
              support and other organizational and methodological measures in
              the field of crime prevention and public safety;
            </p>
          </div>
          <div className={style.block}>
            <div className={style.svg}></div>
            <p>
              <span>
                in the field of spiritual, moral and educational work{" "}
              </span>{" "}
              – promoting the spiritual, intellectual, physical and moral
              development of students and respect for national values, the
              development of patriotism, civic stance, tolerance, respect for
              laws, national and universal values, the development of students'
              firm faith and outlook on life , a sense of responsibility to the
              state and society, understanding and adherence to the principles
              of humanity, interethnic harmony, justice and the rule of law, as
              well as love and devotion to their people.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jangovor3;
