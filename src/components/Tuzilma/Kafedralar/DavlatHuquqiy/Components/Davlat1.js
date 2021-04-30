import React from 'react'
import style from './Davlat1.module.css'
import Rotate from 'react-reveal/Rotate';

const Davlat1 = () => {
    return (
        <div className={style.main} > 
            <div className={style.inMain} > 
            <Rotate bottom left cascade>
                <div className={style.head}  >
                    <h2>
                    DAVLAT-HUQUQIY FANLAR KAFEDRASI
                    </h2>
                    <span></span>
                    <p>
                    Toshkent davlat yuridik universitetining Ixtisoslashtirilgan filiali Davlat-huquqiy fanlar kafedrasi O‘zbekiston Respublikasi Prezidentining 2019 yil 7 fevraldagi “Xuquqbuzrliklar profilaktikasi va jamoat xafsizligini ta’minlash sohasida kadrlar tayyorlash tizimini takomillashtirishga doir qo‘shimcha chora-tadbirlar to‘g‘risida”gi PQ-4166-sonli  qaroriga muvofiq tashkil etilgan. 
                    </p>
                </div>
            </Rotate>
            </div>
        </div>
    )
}

export default Davlat1
