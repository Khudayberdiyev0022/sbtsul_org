import { Link } from 'react-router-dom'
import React from 'react'
import style from '../../../components/Tuzilma/Dekanatlar/Dekanatlar.module.css'


const DekanatlarRus = () => {
  return (
    <div className={style.main}>
      <h1>Деканаты</h1>
      <div className={style.container}>
        <Link to="/rus/tayyorlash">
          <span>ДЕКАНАТ ПОДГОТОВИТЕЛЬНЫХ КУРСОВ</span>
        </Link>
        <Link to="/rus/qayta-tayyorlash">
          <span>ДЕКАНАТ КУРСОВ ПЕРЕПОДГОТОВКИ</span>
        </Link>
      </div>
      <div className={style.mobile}>
        <Link to="/tayyorlash">
          <span>ДЕКАНАТ ПОДГОТОВИТЕЛЬНЫХ КУРСОВ</span>
        </Link>
        <Link to="/rus/qayta-tayyorlash">
          <span>ДЕКАНАТ КУРСОВ ПЕРЕПОДГОТОВКИ</span>
        </Link>
      </div>
    </div>
  )
}

export default DekanatlarRus;
