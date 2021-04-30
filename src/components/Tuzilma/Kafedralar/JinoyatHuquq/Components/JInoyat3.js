import React from 'react'
import style from './Jinoyat3.module.css'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const JInoyat3 = () => {
    return (
        <div className={style.main} >
            <div className={style.inMain} >
            <Fade top cascade>
                <div className={style.head} >
                    <h2>
                        KAFEDRANING VAZIFALARI 
                    </h2>
                    <p>
                        Kafedraning asosiy vazifalari etib quyidagilar belgilangan:
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
                            <span>Ilmiy-metodik ishlar sohasida</span> –o‘quv jarayonining ilmiy-metodik asoslarini ishlab chiqish, o‘quv-uslubiy materiallar bilan taʼminlash, ushbu sohadagi xorijiy tajribani o‘rgangan holda professor-o‘qituvchilarning mehnat unumdorligi va taʼlim sifati hamda samaradorligini oshirishga hizmat qiladigan zamonaviy taʼlim texnologiyalarini joriy qilish;   
                        </p>
                    </div>
                    <div className={style.block} >
                        <div className={style.svg} >

                        </div>
                        <p>
                            <span>Ilmiy-tadqiqot ishlari sohasida</span> – mamlakatda amalga oshirilayotgan ijtimoiy-iqtisodiy, demokratik va sud-huquq islohotlarining ustuvor vazifalari, ilgʼor jahon tajribasi va xalqaro standartlarni hisobga olgan holda, zamonaviy yuridik fan rivojlanishining ustuvor yo‘nalishlari bo‘yicha ilmiy-tadqiqot ishlarini bajarish va ularning natijalarini amaliyotga tatbiq etilishini taʼminlash;
                        </p>
                    </div>
                    <div className={style.block} >
                        <div className={style.svg} >

                        </div>
                        <p>
                            <span>Tashkiliy-metodik ishlar sohasida</span> – taʼlim sifatini baholash, uning tahlilini olib borish, shuningdek, huquqbuzarliklar profilaktikasi va jamoat xavfsizligini taʼminlash sohasi bo‘yicha faoliyatini uslubiy va konsulьtativ taʼminlash hamda boshqa tashkiliy-metodik tadbirlarni samarali tashkil etish;
                        </p>
                    </div>
                    <div className={style.block} >
                        <div className={style.svg} >

                        </div>
                        <p>
                            <span>Maʼnaviy-axloqiy va tarbiyaviy ishlar sohasida</span> – taʼlim oluvchilarni maʼnaviy, intellektual, jismoniy va axloqiy jihatdan kamol topishiga ko‘maklashish va milliy qadriyatlarni hurmat qilish, vatanparvarlik, fuqarolik tuygʼusi, bagʼrikenglik, qonunlarga, milliy va umuminsoniy qadriyatlarga hurmat ruhida, zararli taʼsirlar hamda oqimlarga qarshi tura oladigan, hayotga bo‘lgan qatʼiy ishonch va qarashlarga ega qilib tarbiyalash, davlat va jamiyat oldida o‘z masʼuliyatini his etish, insonparvarlik, millatlararo totuvlik, adolat hamda qonun ustuvorligi mezonlarini anglab yetish va unga rioya etish ruhida tarbiyalash, shuningdek, ularning aholi hamda ommaviy axborot vositalari bilan ishlash va o‘zaro hamkorlik qilish ko‘nikmalarini takomillashtirish.
                        </p>
                    </div>
                </div>
            </Zoom>
            </div>
        </div>
    )
}

export default JInoyat3
