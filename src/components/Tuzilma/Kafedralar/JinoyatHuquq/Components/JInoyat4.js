import React from 'react'
import style from './Jinoyat4.module.css'
import img1 from '../../../../../assets/img/oquvvv1.jpg'
import Bounce from 'react-reveal/Bounce';

const JInoyat4 = () => {
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
                                O‘quv-uslubiy faoliyat doirasida Chоp etilgаn dаrsliklаri – 2 tа jumlаdаn А.Zаkrullаеvning hаmmuаlliflikdа “Jinоyat prоsеssuаl huquqi” vа “Jinоyat ijrоya huquqi” dаrsliklаri chоp etilgаn. Chоp etilgаn o`quv qo`llаnmаlаri – 1 tа, jumlаdаn S.Оchilоvning hаmmuаlliflikdа “Sud vа huquqni muhоfаzа qiluvchi оrgаnlаr” chоp etilgаn
                            </p>
                        </div>
                    </div>
                    <div className={style.text} >
                        <p>
                        Jinoyat protsessual huquqi” o’quv modulidan “Jinoyat protsessida dalillar”, “Jinoyat protsessida isbotlash”, “Huquqbuzarliklar profilaktikasi faoliyati” o’quv  modulidan “Huquqbuzarliklar profilaktikasi” nomli o’quv qo’llanmalar tayyorlanib, chop etilish arafasida.                        </p>
                    </div>
                    <div  className={style.text} >
                        <p>
                        o‘quv ishlari bo‘yicha tegishli o‘quv dastur va rejalar ishlab chiqilib, belgilangan maʼruza va amaliy mashgʼulotlar o‘tkazib kelinmoqda. Xozirgi kunda, ushbu yo‘nalishda Ichki ishlar, Mudofaa vazirliklari va Milliy gvardiya harbiy qism va oliy taʼlim muassasalari bilan samarali hamkorlik o‘rnatilgan. “Master-klass”lar, amaliy mashgʼulotlar, ko‘rgazma, uchrashuv va davra suhbatlari ham tashkillashtirilmoqda; 
                        </p>
                    </div>
                </div>
            </div>
        </Bounce>
        </div>
    )
}

export default JInoyat4
