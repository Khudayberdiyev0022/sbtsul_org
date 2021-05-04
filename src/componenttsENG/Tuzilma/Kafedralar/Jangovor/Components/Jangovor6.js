import React from "react";
import style from "./Jangovor6.module.css";
import bg from "../../../../../assets/img/section_bg04.jpg";
import img from "../../../../../assets/img/mm1.jpg";
// import Bounce from "react-reveal/Bounce";

const Jangovor6 = () => {
  return (
    <div className={style.main} style={{ backgroundImage: `url(${bg})` }}>
      {/* <Bounce top cascade> */}
        <div className={style.inMain}>
          <h2>SPIRITUAL-EDUCATIONAL AND EDUCATIONAL-MORAL WORK</h2>
          <span></span>
          <div className={style.text}>
            <div
              className={style.img}
              style={{ backgroundImage: `url(${img})` }}
            ></div>
            <p>
              <span></span> Department of "Professional combat training"
               professors and teachers talk to students
               organizes Every year the teachers of the department meet with students
               together with the Central Armed Forces of the Republic of Uzbekistan
               Museum Victory Park and visits to various venues and the military
               organizes meetings with veterans.
            </p>
          </div>
          <p>
            <span></span> Physical training and sports
             The club was established, under which today the sport "MMA",
             Sambo and mini-football clubs are launched
             set. Currently playing badminton and basketball
             work on organizing the activities of the clubs
             being increased. Sambo and Athletics Federations of Uzbekistan
             Memorandums of cooperation were signed with
          </p>
          <p>
            <span></span> Our students who have achieved high results in the branch
             including two-time World Belt Wrestling
             Winner of the Championship (Tatarstan and Kazakhstan - 2019),
             Two-time world champion in sambo (Uzbekistan,
             Germany). In addition, throughout the country, "Jui-jitsu", "Hand
             "War", "Freestyle wrestling" and "Greek rum"
             there are more than 10 students who have achieved results. Currently,
             qualifying among students in a variety of other sports
             (selection) work is underway. Future activity in the Branch
             Universiade of our students on behalf of the sports club
             and national and international
             It is planned to participate in competitions.
          </p>
        </div>
      {/* </Bounce> */}
    </div>
  );
};

export default Jangovor6;
