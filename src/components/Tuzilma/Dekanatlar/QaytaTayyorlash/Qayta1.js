import React from 'react'
import style from './Qayta1.module.css'
import Rotate from 'react-reveal/Rotate';

const Qayta1 = () => {
    return (
        <div className={style.main} > 
            <div className={style.inMain} > 
            <Rotate bottom left cascade>
                <div className={style.head}  >
                    <h2>
                    QAYTA TAYYORLASH KURSLARI DEKANATI 
                    </h2>
                    <span></span>
                    <p>
                        <span></span> Toshkent davlat yuridik universitetining Ixtisoslashtirilgan filiali Qayta tayyorlash kurslari dekanati 2019 yil 7 fevraldagi “Huquqbuzarliklar profilaktikasi va jamoat xavfsizligini taʼminlash sohasida kadrlar tayyorlash tizimini takomillashtirishga doir qo‘shimcha chora-tadbirlar to‘g‘risida”gi qaroriga muvofiq tashkil etilgan.
                    </p>
                </div>
            </Rotate>
            </div>
        </div>
    )
}

export default Qayta1
