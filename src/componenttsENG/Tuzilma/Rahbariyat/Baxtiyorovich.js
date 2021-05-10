import React from "react";
import style from "../../../components/Tuzilma/Rahbariyat/Baxtiyorovich.module.css";
import img from "../../../assets/img/djuraev.jpg";
// import Zoom from "react-reveal/Zoom";

const BaxtiyorovichEng = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        <div
          className={style.img}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        {/* <Zoom top cascade> */}
          <div className={style.text}>
            <h2>Djuraev Ixtiyor Bakhtiyorovich</h2>
            <h4>Deputy Director for Educational Affairs</h4>
            <span></span>
            <p>
              <span></span> Tashkent State Law University
              Educational work of the director of the specialized branch
              Deputy Chairman of the Board of Directors Djuraev Ikhtiyor Bakhtiyorovich - 1980 25
              He was born in November in Kasbi district of Kashkadarya region. Information
              - Higher, lawyer, candidate of legal sciences. 2002 Tashkent
              bachelor's degree from the State Law Institute, master's degree in 2007
              completed. Djuraev Ikhtiyor began his career in 2002
              Kovchin professional college of Karshi district of Kashkadarya region
              From 2003-2005 he worked as a teacher in Tashkent
              Senior Inspector of the Academic Department of the State Law Institute, 2007–2012
              Tashkent State Law Institute “Court and law
              Teacher of the Department of "Law Enforcement Bodies", 2012-2013
              Tashkent State Law Institute “Criminal Procedure
              Teacher of the Department of "Law", Tashkent State University in 2013-2014
              University of Law Judiciary and law enforcement
              Lecturer, Tashkent State Law University
              Head of the Department of Lyceums and Colleges (part-time)
              on the basis of), Tashkent State Law University in 2014-2016
              Retraining and advanced training of teachers
              Dean of the Faculty, Tashkent State Law in 2016-2019
              as the Head of the Educational and Methodological Department of the University
              worked. Minister of Justice of the Republic of Uzbekistan 2019
              Tashkent State Law No. 160 of March 1, 2006
              Director of the Specialized Branch of the University
              to the post of Deputy for Educational Affairs
              assigned.
            </p>
          </div>
        {/* </Zoom> */}
      </div>
    </div>
  );
};

export default BaxtiyorovichEng;
