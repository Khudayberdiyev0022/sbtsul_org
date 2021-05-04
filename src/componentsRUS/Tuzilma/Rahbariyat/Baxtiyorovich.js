import React from "react";
import style from "./Baxtiyorovich.module.css";
import img from "../../../assets/img/djuraev.jpg";
// import Zoom from "react-reveal/Zoom";

const Baxtiyorovich = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        <div
          className={style.img}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        {/* <Zoom top cascade> */}
          <div className={style.text}>
            <h2>Джураев Ихтиер Бахтиерович</h2>
            <h4>Заместитель директора по учебно-воспитательной работе</h4>
            <span></span>
            <p>
              <span></span> Заместитель директора по учебно-воспитательной работе специализированного филиала Ташкентского государственного юридического университета Джураев Ихтиер Бахтиерович – родился 25 ноября 1980 года в Касбийском районе Кашкадарьинской области. Образование-высшее, юрист, кандидат юридических наук. В 2002 году окончил бакалавриат Ташкентского государственного юридического института, в 2007 году-магистратуру. Джураев Ихтиер начал свою трудовую деятельность в 2002 году с должности преподавателя Ковчинского профессионального колледжа Каршинского района Кашкадарьинской области, в 2003-2005 годах-старший надзиратель учебного отдела Ташкентского государственного юридического института, в 2007-2012 годах-преподаватель кафедры “судебные и правоохранительные органы” Ташкентского государственного юридического института, в 2012-2013 годах-преподаватель кафедры “уголовно-процессуальное право” Ташкентского государственного юридического института, в 2013-2014 годах-преподаватель кафедры судебных и правоохранительных органов Ташкентского государственного юридического университета
            </p>
          </div>
        {/* </Zoom> */}
      </div>
    </div>
  );
};

export default Baxtiyorovich;
