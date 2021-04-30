import React from 'react'
import style from './KonAr3.module.css'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const KonAr3 = () => {
    return (
        <div className={style.main} >
            <div className={style.inMain} >
            <Fade top cascade>
                <div className={style.head} >
                    <h2>
                        BO‘LIMNING VAZIFALARI 
                    </h2>
                    <p>
                        Bo‘limning asosiy vazifalari etib quyidagilar belgilangan:
                    </p>
                    <span></span>
                </div>
            </Fade>
            <Zoom top cascade>
                <div className={style.grid} >
                    <div className={style.block} >
                        <div className={style.svg} >
                            {/* <VscOrganization/> */}
                        </div>
                        <p>
                        Toshkent davlat yuridik universitetining Ixtisoslashtirilgan filiali Kanselyariyasi va arxivi 2019 yil 7 fevraldagi “Huquqbuzarliklar profilaktikasi va jamoat xavfsizligini taʼminlash sohasida kadrlar tayyorlash tizimini takomillashtirishga doir qo‘shimcha chora-tadbirlar to‘g‘risida”gi qaroriga muvofiq tashkil etilgan.
                        </p>
                    </div>
                    <div className={style.block} >
                        <div className={style.svg} >
                            {/* <VscOrganization/> */}
                        </div>
                        <p>
                        Kanselyariya va arxiv Filialning tarkibiy bo‘linmasi hisoblanib, filialda ish yuritish va elektron hujjat almashinuvini taʼminlash hamda filial faoliyatiga oid arxiv hujjatlarini tizimli hisobga olish va tegishli sharoitda saqlashni amalga oshiradi.
                        </p>
                    </div>
                    <div className={style.block} >
                        <div className={style.svg} >
                            {/* <VscOrganization/> */}
                        </div>
                        <p>
                        Kanselyariya va arxivning asosiy vazifalari, ish yuritish va elektron hujjat almashinuvini taʼminlash, tarkibiy bo‘linmalarda muxr va shtamplar hisobini yuritish, arxiv ish yurituvini taʼminlashdan iborat.
                        </p>
                    </div>
                    <div className={style.block} >
                        <div className={style.svg} >
                            {/* <VscOrganization/> */}
                        </div>
                        <p>
                        Filial kanselyariyasida 1 nafar kanselyariya mudiri, 1 nafar arxivarius, 1 nafar kuryer vazifalarida xodimlar faoliyat olib bormoqda.
                        </p>
                    </div>
                    <div className={style.block} >
                        <div className={style.svg} >
                            {/* <VscOrganization/> */}
                        </div>
                        <p>
                        Filialda yuritilayotgan hujjatlarni elektron tarzda nazorat qilish uchun av.ijro.uz dasturidan foydalanib kelinmoqda.
                        </p>
                    </div>
                    
                </div>
            </Zoom>
            </div>
        </div>
    )
}

export default KonAr3
