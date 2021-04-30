import React from 'react';
import { Link } from 'react-router-dom';
import { structures } from "../Home/ExtraCards/Photo";
import style from './Tuzilma.module.css'

const Tuzilma = () => {
   return (
      <div className={style.main}>
      <div className={style.container}>
        {structures.map((structure, index) => {
          return (
            <div key={index} className={style.box}>
              <img src={structure.icon} alt="icon" />
              <Link to={structure.to}>{structure.title}</Link>
            </div>
          );
        })}
      </div>
    </div>
   )
}

export default Tuzilma
