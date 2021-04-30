import React from 'react'
import  style from './Jinoyat6.module.css'
import bg from '../../../../../assets/img/section_bg04.jpg'
import img from '../../../../../assets/img/manav121.jpg'
import Bounce from 'react-reveal/Bounce';

const JInoyat6 = () => {
    return (
        <div className={style.main} style={{backgroundImage:`url(${bg})`}} >
        <Bounce top cascade>
            <div className={style.inMain} >
                <h2>
                    MA’NAVIY-MA’RIFIY VA TARBIYAVIY-AXLOQIY ISHLAR
                </h2>
                <span></span>
                <div className={style.text} >
                    <div className={style.img} style={{backgroundImage:`url(${img})`}} ></div>
                    <p>
                        <span></span> “Jinoyat-huquqiy fanlar” kafedrasi professor-o’qituvchilari talabalar bilan suhbat, uchrashuvlar uyushtiradi. Kafedra professor-o’qituvchilari talabalar bilan birgalikda g'alaba bog'i,  Respublika sud-tibbiy ekspertizasi ilmiy-amaliy markazlari, M. Ulug’bek tumanida joylashgan “E’lobod” MFY hamda mahalla huquq-tartibot maskaniga, jinoyat ishlari bo'yicha Yunusobod tuman sudi hamkorligida, jinoyat ishi ko'rilishidagi jarayoniga tashriflar va boshqa bir qator  uchrashuvlar tashkil etildi. 


                    </p>
                </div>
            </div>
        </Bounce>
        </div>
    )
}

export default JInoyat6
