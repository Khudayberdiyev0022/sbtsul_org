import React from "react";
import { Link } from "react-router-dom";
import style from "../../../components/Tuzilma/Bolimlar/Bolimlar.module.css";
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
          <Link to="/rus/buxgalteriya-bolimi">
            ОТДЕЛ БУХГАЛТЕРИИ
          </Link>
        </div>
        <div className={style.card}>
          <BiDollar />
          <Link to="/rus/mi-bolimi">
          ОТДЕЛ ФИНАНСОВ И ЭКОНОМИКИ
          </Link>
        </div>
        <div className={style.card}>
          <IoBookOutline />
          <Link to="/rus/ou-bolimi">
          УЧЕБНО-МЕТОДОЛОГИЧЕСКОЕ ОТДЕЛЕНИЕ
          </Link>
        </div>
        <div className={style.card}>
          <FaHeadphonesAlt />
          <Link to="/rus/at-bolimi">
          ОТДЕЛЕНИЕ ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ
          </Link>
        </div>
        <div className={style.card}>
          <BsFillPeopleFill />
          <Link to="/rus/kadrlar-bolimi">
           ОТДЕЛ КАДРОВ
          </Link>
        </div>
        <div className={style.card}>
          <GiTeacher />
          <Link to="/rus/tarbiyaviy-ishlar-bolimi">
          ОТДЕЛЕНИЕ ОБРАЗОВАТЕЛЬНЫХ ДЕЛ
          </Link>
        </div>
        <div className={style.card}>
          <RiHistoryLine />
          <Link to="/rus/ka-bolimi">
          ОТДЕЛЕНИЕ КАНЦЕЛЯРИЯ И АРХИВА
          </Link>
        </div>
        <div className={style.card}>
          <BiStreetView />
          <Link to="/rus/ex-bolimi">
          ОТДЕЛ ЭКСПЛУАТАЦИИ И ЭКОНОМИКИ
          </Link>
        </div>
        <div className={style.card}>
          <BiNetworkChart />
          <Link to="/rus/ikkinchi-bolim">
        ВТОРОЙ ОТДЕЛ
          </Link>
        </div>
        <div className={style.card}>
          <AiOutlineBank />
          <Link to="/rus/direktorat">
            ДИРЕКТОРАТ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BolimlarRus;





