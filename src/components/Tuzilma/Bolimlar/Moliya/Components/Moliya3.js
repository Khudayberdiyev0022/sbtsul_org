import React from 'react'
import style from './Moliya3.module.css'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const Moliya3 = () => {
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
                        -Filialning moliyaviy-iqtisodiy holatini yanada mustahkamlash, budjet intizomiga qat’iy rioya etish, moliya-iqtisod faoliyatini rejali yuritish, budjet va budjetdan tashqari mablag‘lardan maqsadli foydalanishning samaradorligini oshirishni tashkil etish;
                        </p>
                    </div>
                    <div className={style.block} >
                        <div className={style.svg} >
                            {/* <VscOrganization/> */}
                        </div>
                        <p>
                        -Filial xodimlarining shtat jadvallarini, xarajatlar smetasini ishlab chiqish, o‘zgartirish va qo‘shimchalar kiritish ishlarini amalga oshirish;
                        </p>
                    </div>
                    <div className={style.block} >
                        <div className={style.svg} >
                            {/* <VscOrganization/> */}
                        </div>
                        <p>
                        -xarajatlar smetasida ko‘rsatilgan mablag‘lardan o‘z maqsadlari yo‘lida to‘g‘ri foydalanish, o‘rinsiz yoki ortiqcha xarajatga yo‘l qo‘ymasliklarni nazoratga olish;
                        </p>
                    </div>
                    <div className={style.block} >
                        <div className={style.svg} >
                            {/* <VscOrganization/> */}
                        </div>
                        <p>
                        -xodimlarga ustama haqlarni berilishi bilan bog‘liq ishlarni amalga oshirish;
                        </p>
                    </div>
                    <div className={style.block} >
                        <div className={style.svg} >
                            {/* <VscOrganization/> */}
                        </div>
                        <p>
                        -doimiy ravishda yangiliklar, sodir bo‘layotgan moliyaviy-iqtisodiy ko‘rsatkichlar bilan rahbariyatni o‘z vaqtida tanishtirib borish;
                        </p>
                    </div>
                    <div className={style.block} >
                        <div className={style.svg} >
                            {/* <VscOrganization/> */}
                        </div>
                        <p>
                        -tegishli tashkilotlarga barcha moliyaviy-iqtisodiy hisobotlarni o‘z vaqtida tayyorlash va taqdim etish;
                        </p>
                    </div>
                    <div className={style.block} >
                        <div className={style.svg} >
                            {/* <VscOrganization/> */}
                        </div>
                        <p>
                        -Filial faoliyati uchun xarid qilinishi lozim bo‘lgan tovarlar, ishlar va xizmatlarni davlat xaridlari maxsus savdo-axborot portaliga joylashtirishni ta’minlash va nazorat qilish;
                        </p>
                    </div>
                    <div className={style.block} >
                        <div className={style.svg} >
                            {/* <VscOrganization/> */}
                        </div>
                        <p>
                        -qonun hujjatlarida va Filial Ustavida nazarda tutilgan hamda Filial direktori tomonidan yuklatilgan boshqa vazifalarni bajarish.
                        </p>
                    </div>
                    
                </div>
            </Zoom>
            </div>
        </div>
    )
}

export default Moliya3
