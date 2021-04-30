import React from 'react'
import style from './Davlat5.module.css'
import Zoom from 'react-reveal/Zoom';
import img from '../../../../../assets/img/manaviy111.jpg'

const Davlat5 = () => {
    return (
        <div className={style.main}   >
            <div className={style.inMain} >
            <Zoom top >

                <h2>
                    ILMIY VA ILMIY-USLUBIY ISHLAR 
                </h2>
                <span></span>
                <div className={style.flex} >
                    <div className={style.img} style={{backgroundImage:`url(${img})`}} ></div>
                    <p>
                        <span></span> Hozirda kafedraning ilmiy salohiyati 33 foizni tashkil etadi, 2021/2022 o‘quv yili yakuniga qadar mazkur ko‘rsatkich 100 foizga oʼsishi kutilmoqda. Qisqa muddat kafedra professor-oichida yuqori impact faktorli xalqaro ilmiy jurnallarda – 10ga yaqin, respublika ilmiy jurnallarida – 15ga yaqin ilmiy maqolalar chop ettirilgan, xalqaro va respublika konferentsiyalarida – 15ga yaqin maqola va tezislari bilan ishtirok etgan.
                    </p>
                </div>
                <p>
                    <span></span> O‘zbekiston Respublikasi Adliya vazirligi, Ichki ishlar vazirligi, Toshkent davlat yuridik universiteti, Milliy gvardiya Harbiy texnik-instituti, Ichki ishlar vazirligi Akademiyasi va Davlat boshqaruvi Akademiyalari bilan hamkorlikda 2020 yilning noyabr oyida “Huquqiy islohotlar sharoitida insonlarning konstitutsiyaviy huquq va erkinliklari himoyasini kuchaytirishning dolzarb masalalari” mavzusida respublika ilmiy-amaliy onlayn konferensiyasi tashkil etildi va oʼtkazildi.
                </p>
                <p>
                    Kafedra professor-o‘qituvchilar tomonidan ta’lim oluvchilarning qiziqishlarini e’tiborga olgan holda turli fanlar, yo‘nalishlar bo‘yicha ilmiy to‘garaklar tashkil etilgan. Xususan, “Discussion club”; “Government” va “Qonunchilik texnikasi –rasmiy hujjatlar tayyorlash” ilmiy to‘garaklari shular jumlasidan.
                </p>
            </Zoom>
            </div>
        </div>
    )
}

export default Davlat5
