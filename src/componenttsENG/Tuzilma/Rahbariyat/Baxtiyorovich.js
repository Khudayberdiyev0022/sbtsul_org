import React from "react";
import style from "../../../components/Tuzilma/Rahbariyat/Baxtiyorovich.module.css";
import img from "../../../assets/img/djuraev.jpg";

const BaxtiyorovichEng = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        <div
          className={style.img}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div className={style.text}>
          <h2>Djuraev Ixtiyor Bakhtiyorovich</h2>
          <h4>Deputy Director of Educational Affairs</h4>
          <span></span>
          <p>
            <span></span> Deputy Director of Educational Affairs of the
            Specialized Branch of the Tashkent State University of Law. Djurauv
            Ikhtiyor Bakhtiyorovich - was born on November 25, 1980 in Kasbizh
            district of Kashkadarya region. Education - higher, lawyer,
            candidate of Law disciplines. In 2002, he received his bachelor’s
            degree and in 2007 did his Master’s degree at the Tashkent State Law
            Institute. He started his work in 2002 as a teacher of the
            Kovchinsky Vocational College of Karshi district in Kashkadarya
            Region, between 2003 and 2005 worked as a senior inspector of the
            training department of Tashkent State Institute of Law. From 2007 to
            2012 he continued his career as a professor of the department
            “Judicial –law- enforcement” of Tashkent Institute of Law. Between
            2013 and 2014 he took the position of professor of the department
            “Judicial –Human Rights Bodies” of Tashkent Law Institute, and
            simultaneously worked as a head of the department (part-time) for
            work with lyceums and colleges of Tashkent State University of Law.
            2014-2016 Dean of the Faculty of Retraining and Advanced Training of
            Teachers of the Tashkent State Law University, 2016-2019 Head of the
            Teaching and Methodological Department of the Tashkent State Law
            University. By the order of the Minister of Justice of the Republic
            of Uzbekistan 160 from 6 March 2019, he was appointed as Deputy
            Director for Educational Affairs of the Specialized branch of the
            Tashkent State Law University.
          </p>
          <p>Public reception on Monday from 10:00 to 12:00</p>
          <p>
            <b>Telephone:</b> 233-66-36 (1110)
          </p>
          <p>
            <b>E-mail: </b> z.xurozov.@tsul.uz
          </p>
        </div>
      </div>
    </div>
  );
};

export default BaxtiyorovichEng;
