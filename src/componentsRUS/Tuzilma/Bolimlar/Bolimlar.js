import React from "react";
import { Link } from "react-router-dom";
import style from "./Bolimlar.module.css";
import { AiOutlineBank } from 'react-icons/ai'
import { MdMonetizationOn } from 'react-icons/md'
import { BiDollar, BiStreetView, BiNetworkChart } from 'react-icons/bi'
import { IoBookOutline } from 'react-icons/io5'
import { FaHeadphonesAlt } from 'react-icons/fa'
import { BsFillPeopleFill } from 'react-icons/bs'
import { GiTeacher } from 'react-icons/gi'
import { RiHistoryLine } from 'react-icons/ri'


const BolimlarRus = () => {
  return (
    <div className={style.main}>
      <div className={style.bgImg}>
        <h2>Отделы</h2>
      </div>
      <div className={style.container}>
        <div className={style.card}>
          <MdMonetizationOn />
          <Link to="/buxgalteriya-bolimi">
            ОТДЕЛ БУХГАЛТЕРИИ
          </Link>
        </div>
        <div className={style.card}>
          <BiDollar />
          <Link to="/mi-bolimi">
          ОТДЕЛ ФИНАНСОВ И ЭКОНОМИКИ
          </Link>
        </div>
        <div className={style.card}>
          <IoBookOutline />
          <Link to="/ou-bolimi">
          УЧЕБНО-МЕТОДОЛОГИЧЕСКОЕ ОТДЕЛЕНИЕ
          </Link>
        </div>
        <div className={style.card}>
          <FaHeadphonesAlt />
          <Link to="/at-bolimi">
          ОТДЕЛЕНИЕ ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ
          </Link>
        </div>
        <div className={style.card}>
          <BsFillPeopleFill />
          <Link to="/kadrlar-bolimi">
           ОТДЕЛ КАДРОВ
          </Link>
        </div>
        <div className={style.card}>
          <GiTeacher />
          <Link to="/tarbiyaviy-ishlar-bolimi">
          ОТДЕЛЕНИЕ ОБРАЗОВАТЕЛЬНЫХ ДЕЛ
          </Link>
        </div>
        <div className={style.card}>
          <RiHistoryLine />
          <Link to="/ka-bolimi">
          ОТДЕЛЕНИЕ ОФИСА И АРХИВОВ
          </Link>
        </div>
        <div className={style.card}>
          <BiStreetView />
          <Link to="/ex-bolimi">
          ОТДЕЛ ЭКСПЛУАТАЦИИ И ЭКОНОМИКИ
          </Link>
        </div>
        <div className={style.card}>
          <BiNetworkChart />
          <Link to="/ikkinchi-bolim">
        ВТОРОЙ ОТДЕЛ
          </Link>
        </div>
        <div className={style.card}>
          <AiOutlineBank />
          <Link to="/direktorat">
            ДИРЕКТОРАТ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BolimlarRus;





