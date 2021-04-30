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
                            Ўқув-услубий фаолият доирасида кафедра доценти Л.Бурханованинг Юриспруденция (ҳуқуқбузарликлар профилактикаси ва жамоат хавфсизлигини таъминлаш) таълим йўналиши талабалари учун “Семейное право” ўқув қўлланмаси (125 бет) чоп этилиши кутилмоқда. Шунингдек, 2020-2021 ўқув йили якунига қадар “Гражданкое право” дарслиги ва “Интеллектуал мулк ҳуқуқи” ўқув қўлланмаси тайёрланиб чоп этилиши режалаштирилган. 
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
