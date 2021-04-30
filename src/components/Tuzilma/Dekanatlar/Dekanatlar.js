import { Link } from 'react-router-dom'
import React from 'react'
import style from './Dekanatlar.module.css'


const Dekanatlar = () => {
   return (
      <div className={style.main}>
         <ul>
        <Link to="/tayyorlash">
          <li>TAYYORLASH KURSLARI DEKANATI</li>
        </Link>
        <Link to="/qayta-tayyorlash">
          <li>QAYTA TAYYORLASH KURSLARI DEKANATI</li>
        </Link>
        </ul>
      </div>
   )
}

export default Dekanatlar
