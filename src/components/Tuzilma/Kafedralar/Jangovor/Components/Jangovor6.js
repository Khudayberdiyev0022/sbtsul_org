import React from 'react'
import style from './Jangovor6.module.css'
import bg from '../../../../../assets/img/section_bg04.jpg'
import img from '../../../../../assets/img/mm1.jpg'
import Bounce from 'react-reveal/Bounce';

const Jangovor6 = () => {
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
                        <span></span> “Kasbiy-jangovar tayyorgarlik” kafedrasi professor-o’qituvchilari talabalar bilan suhbat, uchrashuvlar uyushtiradi. Har yili kafedra o’qituvchilari talabalar bilan birgalikda Oʻzbekiston respublikasi qurolli kuchlari markaziy muzeyi g'alaba bog'I hamda turli maskanlarga tashriflar va harbiy veteranlar bilan uchrashuvlar tashkil etadi. 
                    </p>
                </div>
                <p>
                    <span></span> Jismoniy tabriya va sport yo‘nalishi bo‘yicha sport klubi tashkil etilib, uning doirasida bugungi kunda sportning “MMА”, “Sambo” va “mini-futbol” turlari bo‘yicha to‘garak faoliyati yo‘lga qo‘yildi. Hozirda, “Badminton”, “Basketbol” sport turlari bo‘yicha to‘garaklarning faoliyati tashkil etish bo‘yicha ishlar amalga oshirilmoqda. O‘zbekiston sambo va yengil atletika federatsiyalari bilan hamkorlik memorandumlari imzolandi.
                </p>
                <p>
                    <span></span> Filialda yuqori natijaga erishgan talabalarimiz mavjud, jumladan “Belbogʼli kurash” bo‘yicha ikki karra Jaxon chempionatining sovrindori (Tatariston va Kozogʼiston – 2019 y.), “Sambo” sport turi bo‘yicha ikki karra Jaxon chempioni (O’zbekiston, Germaniya). Undan tashqari, respublika miqyosida “Jui-jitsu”, “Qo‘l jangi”, “Erkin kurash” va “Yunon rum” sport turlaridan yuqori natijaga erishgan 10dan ortiq talabalar mavjud. Hozirgi kunda, talabalar orasida boshqa turli sport turlari bo‘yicha saralash (selektsiya) ishlari olib borilmoqda. Kelgusida Filialda faoliyat yuritayotgan sport klubi nomidan talabalarimizning Universiada qatnashishi hamda respublika va Jaxon miqyosida o‘tkaziladigan musobaqalarda ishtirok etish rejalashtirilgan.
                </p>
            </div>
        </Bounce>
        </div>
    )
}

export default Jangovor6
