import React from "react";
import style from "./Davlat3.module.css";
// import Fade from "react-reveal/Fade";
// import Zoom from "react-reveal/Zoom";

const Davlat3 = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        {/* <Fade top cascade> */}
          <div className={style.head}>
            <h2>DUTIES OF THE DEPARTMENT</h2>
            <span></span>
          </div>
        {/* </Fade> */}
        {/* <Zoom top cascade> */}
          <div className={style.grid}>
            <div className={style.block}>
              <div className={style.svg}>{/* <VscOrganization/> */}</div>
              <p>
                <span>In the field of scientific and methodical work</span> – of the learning process
                 development of scientific and methodological bases, teaching methods
                 provision of materials, foreign experience in this field
                 the productivity of professors and teachers in the study
                 and improving the quality and effectiveness of education
                 introduction of modern educational technologies;
              </p>
            </div>
            <div className={style.block}>
              <div className={style.svg}>{/* <VscOrganization/> */}</div>
              <p>
                <span>In the field of research</span> – performed in the country
                 increasing socio-economic, democratic and judicial
                 priorities of reforms, advanced world experience and
                 modern legal science, taking into account international standards
                 research on development priorities
                 perform their work and put their results into practice
                 to ensure maturity;
              </p>
            </div>
            <div className={style.block}>
              <div className={style.svg}>{/* <VscOrganization/> */}</div>
              <p>
                <span>In the field of organizational and methodological work</span> – quality of education
                 evaluation, its analysis, as well as
                 crime prevention and public safety
                 methodological and consulting activities in the field of supply
                 and other organizational and methodological measures
                 to establish;
              </p>
            </div>
            <div className={style.block}>
              <div className={style.svg}>{/* <VscOrganization/> */}</div>
              <p>
                <span>In the field of spiritual, moral and educational work</span> –
                students' spiritual, intellectual, physical and moral
                 promoting national development and national values
                 respect, patriotism, a sense of citizenship,
                 tolerance, laws, national and universal values
                 in a spirit of respect, against harmful influences and currents
                 has a strong belief and outlook on life
                 and their responsibility to the state and society
                 feeling, humanity, interethnic harmony, justice and
                 understanding and adhering to the rule of law criteria
                 educating in the spirit, as well as their population and the masses
                 working with and interacting with the media
                 improve skills.
              </p>
            </div>
          </div>
        {/* </Zoom> */}
      </div>
    </div>
  );
};

export default Davlat3;
