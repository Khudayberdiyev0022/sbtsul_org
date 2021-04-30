import React from 'react'
import style from './Davlat6.module.css'
import bg from '../../../../../assets/img/section_bg04.jpg'
import img from '../../../../../assets/img/manaviy12.jpg'
import Bounce from 'react-reveal/Bounce';
const Davlat6 = () => {
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
                        <span></span>Davlat-huquqiy kafedrasi professor-o‘qituvchilari tomonidan doimiy ravishda talabalar bilan davra suhbatlari va turli uchrashuvlar tashkil qilinib kelinmoqda. Kafedra professor-o‘qituvchilari Tarbiyaviy ishlar bo‘limi bilan hamkorlikda talabalar bo‘sh vaqtini mazmunli tashkil qilish maqsadida murabbiylik guruhlari kesimida talabalarni turli teatr, muzey va bog‘larga tashriflarini tashkillashtirib kelmoqdalar. 
                    </p>
                </div>
                <p>
                    <span></span> Shuningdek, kafedra professor-o‘qituvchilari doimiy ravishda OAVlardagi chiqishlarida o‘z fikr-mulohazalarini bildirib borish bilar bir qatorda, aholi huquqiy ongi va huquqiy madaniyatini oshirish maqsadida ma’naviy-ma’rifiy targ‘ibot ishlarini amalga oshirmoqdalar hamda fuqarolarning muammoli masalalalar yuzasidan berilgan savollariga asoslantirilgan javoblarini berib kelmoqdalar.
                </p>

            </div>
        </Bounce>
        </div>
    )
}

export default Davlat6
