import React from 'react'
import { Link } from 'react-router-dom'
import style from './Bolimlar.module.css'

const Bolimlar = () => {
   return (
      <div className={style.main}>
         <div className={style.bgImg}>
            <h2>Bo'limlar</h2>
         </div>
         <ul>
        <Link to="/buxgalteriya-bolimi">
          <li>BUXGALTERIYA BO'LIMI</li>
        </Link>
        <Link to="/mi-bolimi">
          <li>MOLIYA-IQTISOD BO'LIMI</li>
        </Link>
        <Link to="/ou-bolimi">
          <li>O'QUV USLUBIY BO'LIMI</li>
        </Link>
        <Link to="/at-bolimi">
          <li>AXBOROT TEXNOLOGIYA BO'LIMI</li>
        </Link>
        <Link to="/kadrlar-bolimi">
          <li>KADRLAR BO'LIMI</li>
        </Link>
        <Link to="/ka-bolimi">
          <li>KANSELYARIYA VA ARXIV BO'LIMI</li>
        </Link>
        <Link to="/ex-bolimi">
          <li>EKSPLUATATSIYA VA XO'JALIK BO'LIMI</li>
        </Link>
        <Link to="/ikkinchi-bolim">
          <li>IKKINCHI BO'LIM</li>
        </Link>
      </ul>
      </div>
   )
}

export default Bolimlar
