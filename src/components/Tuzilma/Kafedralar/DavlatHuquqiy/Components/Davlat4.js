import React from 'react'
import style from './Davlat4.module.css'
import img1 from "../../../../../assets/img/oquv111.jpg"
import Bounce from 'react-reveal/Bounce';

const Davlat4 = () => {
    return (
        <div className={style.main} >
        <Bounce top cascade>
            <div className={style.inMain} >
                <h2>
                    O‘QUV VA O‘QUV-USLUBIY ISHLAR   
                </h2>
                <span></span>
                <div className={style.column} >
                    <div className={style.flex} >
                        <div className={style.img} style={{backgroundImage:`url(${img1})`}} ></div>
                        <div className={style.text1} >
                            <p>
                            O‘quv-uslubiy faoliyat doirasida bugungi kunga qadar bir qator o‘quv va o‘quv-uslubiy qo‘llanmalar chop ettirildi. Xususan, “Davlat va huquq nazariyasining umumiy masalalari”, “Общие вопросы теории государства и права”, “Konstitutsiyaviy huquq”, “Конституционное право”, “Sud va huquqni muhofaza qiluvchi organlar” nomli o‘quv qo‘llanmalar kafedra professor-o‘qituvchilari tomonidan tayyorlandi va chop ettirildi. Bundan tashqari, 2020/2021 o‘quv yili yakuniga qadar 1 ta darslik, 2 ta o‘quv qo‘llanma tayyorlanishi rejalashtirilgan;                            </p>
                        </div>
                    </div>
                    <div className={style.text} >
                        <p>
                        O'quv ishlari bo‘yicha tegishli o‘quv dastur va rejalar ishlab chiqilib, belgilangan maʼruza va amaliy mashgʼulotlar o‘tkazib kelinmoqda. Hozirgi kunda, ushbu yo‘nalishda kafedra professor o‘qituvchilari tomonidan bir qator tizimli ishlar amalga oshirib kelinmoqda.                        </p>
                    </div>

                </div>
            </div>
        </Bounce>
        </div>
    )
}

export default Davlat4
