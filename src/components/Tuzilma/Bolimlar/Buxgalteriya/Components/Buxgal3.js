import React from 'react'
import style from './Buxgal3.module.css'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const Buxgal3 = () => {
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
                            Buxgalteriya hisobini zamonaviy texnik vositalar va axborot texnologiyalaridan foydalangan holda tashkil etish, byudjet mablag’larini, shuningdek byudjetdan tashqari mablag’larni xarajatlar smetasida ko’zda tutilgan muayyan maqsadlarda to’g’ri sarflanishinit a‘minlash, pul mablag’lari va moddiy qimmatliklarning butligi ustidan muntazam nazoratni amalga oshirish, professor-o’qituvchilari va xodimlarining ish haqlarini va unga tenglashtirilgan to’lovlarni, talabalarning stipendiyalarini belgilangan tartibda o’z vaqtida hisoblab chiqish hamda ularni tarqatilishini ta‘minlash, belgilangan muddatlarda debitorlik qarzini undirib olishi va kreditorlik qarziniqaytarilishini ta‘minlash, moliyaviy, soliqqa doir va boshqa hisobotlarni tuzish, qonun hujjatlarida va Filial Ustavida nazarda tutilgan hamda Filial direktori tomonidan yuklatilgan boshqa vazifalarini bajaradi.  
                        </p>
                    </div>
                    
                </div>
            </Zoom>
            </div>
        </div>
    )
}

export default Buxgal3
