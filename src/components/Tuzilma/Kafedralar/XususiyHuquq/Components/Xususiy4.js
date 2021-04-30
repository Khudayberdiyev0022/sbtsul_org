import React from 'react'
import style from './Xususiy4.module.css'
import Bounce from 'react-reveal/Bounce';

const Xususiy4 = () => {
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
                        {/* <div className={style.img} style={{backgroundImage:`url(${img1})`}} ></div> */}
                        <div className={style.text1} >
                            <p>
                            Oʼquv-uslubiy faoliyat doirasida kafedra dotsenti L.Burxanovaning Yurisprudentsiya (huquqbuzarliklar profilaktikasi va jamoat xavfsizligini taʼminlash) taʼlim yoʼnalishi talabalari uchun “Semeynoe pravo” oʼquv qoʼllanmasi (125 bet) chop etilishi kutilmoqda. Shuningdek, 2020-2021 oʼquv yili yakuniga qadar “Grajdankoe pravo” darsligi va “Intellektual mulk huquqi” oʼquv qoʼllanmasi tayyorlanib chop etilishi rejalashtirilgan.
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </Bounce>
        </div>
    )
}

export default Xususiy4
