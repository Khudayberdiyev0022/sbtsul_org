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
        <h2>Bo'limlar</h2>
      </div>
      <div className={style.container}>
        <div className={style.card}>
          <MdMonetizationOn />
          <Link to="/buxgalteriya-bolimi">
            BUXGALTERIYA BO'LIMI
          </Link>
        </div>
        <div className={style.card}>
          <BiDollar />
          <Link to="/mi-bolimi">
            MOLIYA-IQTISOD BO'LIMI
          </Link>
        </div>
        <div className={style.card}>
          <IoBookOutline />
          <Link to="/ou-bolimi">
            O'QUV USLUBIY BO'LIMI
          </Link>
        </div>
        <div className={style.card}>
          <FaHeadphonesAlt />
          <Link to="/at-bolimi">
            AXBOROT TEXNOLOGIYA BO'LIMI
          </Link>
        </div>
        <div className={style.card}>
          <BsFillPeopleFill />
          <Link to="/kadrlar-bolimi">
            KADRLAR BO'LIMI
          </Link>
        </div>
        <div className={style.card}>
          <GiTeacher />
          <Link to="/tarbiyaviy-ishlar-bolimi">
            TARBIYAVIY ISHLAR BO'LIMI
          </Link>
        </div>
        <div className={style.card}>
          <RiHistoryLine />
          <Link to="/ka-bolimi">
            KANSELYARIYA VA ARXIV BO'LIMI
          </Link>
        </div>
        <div className={style.card}>
          <BiStreetView />
          <Link to="/ex-bolimi">
            EKSPLUATATSIYA VA XO'JALIK BO'LIMI
          </Link>
        </div>
        <div className={style.card}>
          <BiNetworkChart />
          <Link to="/ikkinchi-bolim">
            IKKINCHI BO'LIM
          </Link>
        </div>
        <div className={style.card}>
          <AiOutlineBank />
          <Link to="/direktorat">
            DIREKTORAT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BolimlarRus;





