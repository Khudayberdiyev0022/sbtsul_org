import React from 'react'
import style from './Baxtiyorovich.module.css'
import img from '../../../assets/img/xurozov.jpg'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const Kaxramonovich = () => {
    return (
        <div className={style.main} >
            <div className={style.inMain} >
            <Fade top cascade>
                <div className={style.img} style={{backgroundImage:`url(${img})`}} ></div>
            </Fade>
            <Zoom top cascade>
                <div className={style.text} >
                    <h2>
                    Xurozov Zafar Kaxramonovich
                    </h2>
                    <h4>
                    Moliya-xoʼjalik ishlari boʼyicha direktori oʼrinbosari
                    </h4>
                    <span></span>
                    <p>
                        <span></span> Toshkent davlat yuridik universitetining Ixtisoslashtirilgan filiali
                    direktorining moliya-xoʼjalik ishlari boʼyicha oʼrinbosari Xurozov
                    Zafar Qaxramonovich – 1984-yil 27-aprelda Samarqand viloyatida
                    tugʼilgan. Maʼlumoti oliy. 2008-yilda Toshkent davlat agrar
                    universitetining “Iqtisodiyot” yoʼnalishini tamomlagan. 2017-yilda
                    Oʼzbekiston Respublikasi Bank-moliya akademiyasining “Davlat
                    moliyasini boshqarish” ixtisosligi boʼyicha magistraturani tugatgan. U
                    2005 yil Shvetsiya, 2006-2007 yillar Shveytsariya va 2016 yil Yaponiya
                    davlatlarida xalqaro student almashish dasturlari tinglovchisi boʼlib
                    qaytgan. Mehnat faoliyatini 2008 yilda “Bayteks-Ticaret” chet el
                    korxonasi markaziy rejalashtirish boʼlimi mutaxassisi lavozimidan
                    boshlagan. 2009–2010-yillarda Oʼzbekiston Respublikasi Moliya
                    vazirligi Oʼquv markazi buxgalteri, 2010-2012 yillarda Oʼzbekiston
                    Respublikasi Ilmiy-texnikaviy va tibbiyot hujjatlari markaziy davlat
                    arxivi bosh buxgalteri, 2012-yil Toshkent mehmonxona xoʼjaligi va
                    servis kasb-hunar kolleji oʼquv ishlari boʼyicha direktor oʼrinbosari,
                    2012–2013-yillarda Toshkent davlat texnika universiteti bosh buxgalter
                    oʼrinbosari, 2013-2017 yillarda Toshkent davlat yuridik universiteti
                    Moliya-iqtisod boʼlimi boshligʼi, 2017–2019-yillarda Oʼzbekiston
                    Respublikasi Madaniyat vazirligi Iqtisodiy tahlil va moliya
                    boshqarmasi boshligʼi oʼrinbosari, bosh buxgalter lavozimlarida
                    ishlagan. Oʼzbekiston Respublikasi Аdliya vazirining 2019 yil 6
                    martdagi 160-sht-son buyrugʼi bilan Toshkent davlat yuridik
                    universiteti Ixtisoslashtirilgan filiali direktorining moliya-xoʼjalik
                    ishlari boʼyicha oʼrinbosari lavozimiga tayinlangan.
                    </p>
                </div>
            </Zoom>
            </div>
        </div>
    )
}

export default Kaxramonovich
