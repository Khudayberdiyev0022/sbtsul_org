import { Link } from 'react-router-dom'
import React from 'react'
import style from './Dekanatlar.module.css'


const DekanatlarEng = () => {
  return (
    <div className={style.main}>
      <h1>DEANS 'OFFICE</h1>
      <div className={style.container}>
        <Link to="/eng/tayyorlash">
          <span>DEANATE OF PREPARATORY COURSES</span>
        </Link>
        <Link to="/eng/qayta-tayyorlash">
          <span>DEANATE OF RETRAINING COURSES</span>
        </Link>
      </div>
      <div className={style.mobile}>
        <Link to="/eng/tayyorlash">
          <span>DEANATE OF PREPARATORY COURSES</span>
        </Link>
        <Link to="/eng/qayta-tayyorlash">
          <span>DEANATE OF RETRAINING COURSES</span>
        </Link>
      </div>
    </div>
  )
}

export default DekanatlarEng;
