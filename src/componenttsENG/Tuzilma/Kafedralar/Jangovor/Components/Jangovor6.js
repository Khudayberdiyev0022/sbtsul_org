import React from "react";
import style from "../../../../../components/Tuzilma/Kafedralar/Jangovor/Components/Jangovor6.module.css";
import bg from "../../../../../assets/img/section_bg04.jpg";
import img from "../../../../../assets/img/mm1.jpg";

const Jangovor6 = () => {
  return (
    <div className={style.main} style={{ backgroundImage: `url(${bg})` }}>
      <div className={style.inMain}>
        <h2>MORAL-EDUCATIONAL WORK</h2>
        <span></span>
        <div className={style.text}>
          <div
            className={style.img}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
          <p>
            <span></span> The teaching staff of the department on an ongoing
            basis with students carry out various educational and spiritual and
            educational activities. Teachers regularly organize cultural and
            leisure activities through students visiting various places of
            interest, museums and other objects of cultural and spiritual
            heritage of our people and country.
          </p>
        </div>
        <p>
          <span></span> A sports club has been created in the Branch, within the
          framework of which the details of mini-football, MMA and SAMBO clubs
          and sections are organized. Work is underway to create badminton and
          basketball clubs. Memorandums of cooperation were signed with the
          Sambo and Athletics Federations of Uzbekistan.
        </p>
        <p>
          <span></span> The branch has certain achievements in sports terms,
          including a two-time winner of the world belt wrestling championship
          (Tatarstan and Kazakhstan - 2019), a two-time world champion in sambo
          (Uzbekistan, Germany). In addition, more than 10 students who have
          achieved high results of a republican scale in such sports as
          jiu-jitsu, hand-to-hand fighting, freestyle and Greco-Roman wrestling
          are studying at the school. The selection of students from other
          sports is currently underway. In the future, it is planned to ensure
          the participation of students in the framework of the created club in
          the Universiade, national and international competitions.
        </p>
      </div>
    </div>
  );
};

export default Jangovor6;
