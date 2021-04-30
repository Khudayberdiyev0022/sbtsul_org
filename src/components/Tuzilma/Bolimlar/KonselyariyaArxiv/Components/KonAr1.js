import React from 'react'
import style from './KonAr1.module.css'
import Rotate from 'react-reveal/Rotate';

const KonAr1 = () => {
    return (
        <div className={style.main} >
            <div className={style.inMain} >
                <Rotate bottom left cascade>
                    <div className={style.head}  >
                        <h2>
                        KANSELYARIYA VA ARXIV BO’LIMI 
                        </h2>
                        <span></span>
                        <p>
                        Toshkent davlat yuridik universitetining Ixtisoslashtirilgan filiali Kanselyariyasi va arxivi 2019 yil 7 fevraldagi “Huquqbuzarliklar profilaktikasi va jamoat xavfsizligini taʼminlash sohasida kadrlar tayyorlash tizimini takomillashtirishga doir qo‘shimcha chora-tadbirlar to‘g‘risida”gi qaroriga muvofiq tashkil etilgan.
                        </p>
                    </div>
                </Rotate>
            </div>
        </div>
    )
}

export default KonAr1
