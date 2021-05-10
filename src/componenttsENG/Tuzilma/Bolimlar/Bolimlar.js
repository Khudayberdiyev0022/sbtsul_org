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


const BolimlarEng = () => {
  return (
    <div className={style.main}>
      <div className={style.bgImg}>
        <h2>Sections</h2>
      </div>
      <div className={style.container}>
        <div className={style.card}>
          <MdMonetizationOn />
          <Link to="/eng/buxgalteriya-bolimi">
          DEPARTMENT OF ACCOUNTING
          </Link>
        </div>
        <div className={style.card}>
          <BiDollar />
          <Link to="/eng/mi-bolimi">
          DEPARTMENT OF FINANCE AND ECONOMY
          </Link>
        </div>
        <div className={style.card}>
          <IoBookOutline />
          <Link to="/eng/ou-bolimi">
          STUDY METHODOLOGICAL DEPARTMENT
          </Link>
        </div>
        <div className={style.card}>
          <FaHeadphonesAlt />
          <Link to="/eng/at-bolimi">
          DEPARTMENT OF INFORMATION TECHNOLOGY
          </Link>
        </div>
        <div className={style.card}>
          <BsFillPeopleFill />
          <Link to="/eng/kadrlar-bolimi">
          HUMAN RESOURCES
          </Link>
        </div>
        <div className={style.card}>
          <GiTeacher />
          <Link to="/eng/tarbiyaviy-ishlar-bolimi">
          DEPARTMENT OF EDUCATIONAL AFFAIRS
          </Link>
        </div>
        <div className={style.card}>
          <RiHistoryLine />
          <Link to="/eng/ka-bolimi">
          DEPARTMENT OF OFFICE AND ARCHIVES
          </Link>
        </div>
        <div className={style.card}>
          <BiStreetView />
          <Link to="/eng/ex-bolimi">
          DEPARTMENT OF EXPLOITATION AND ECONOMY
          </Link>
        </div>
        <div className={style.card}>
          <BiNetworkChart />
          <Link to="/eng/ikkinchi-bolim">
          SECTION TWO
          </Link>
        </div>
        <div className={style.card}>
          <AiOutlineBank />
          <Link to="/eng/direktorat">
          DIRECTORATE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BolimlarEng;





