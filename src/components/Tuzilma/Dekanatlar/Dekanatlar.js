import { Link } from 'react-router-dom'
import React from 'react'
import style from './Dekanatlar.module.css'


const Dekanatlar = () => {
  return (
    <div className={style.main}>
      <h1>DEKANATLAR</h1>
      <div className={style.container}>
        <Link to="/tayyorlash">
          <span>TAYYORLASH KURSLARI DEKANATI</span>
        </Link>
        <Link to="/qayta-tayyorlash">
          <span>QAYTA TAYYORLASH KURSLARI DEKANATI</span>
        </Link>
      </div>
      <div className={style.mobile}>
        <Link to="/tayyorlash">
          <span>TAYYORLASH KURSLARI DEKANATI</span>
        </Link>
        <Link to="/qayta-tayyorlash">
          <span>QAYTA TAYYORLASH KURSLARI DEKANATI</span>
        </Link>
      </div>
    </div>
  )
}

export default Dekanatlar
