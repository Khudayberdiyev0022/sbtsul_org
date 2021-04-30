import React from 'react'
import style from './Jangovor4.module.css'
import img1 from '../../../../../assets/img/ou1.jpg'
import img2 from '../../../../../assets/img/ou2.jpg'
import Bounce from 'react-reveal/Bounce';

const Jangovor4 = () => {
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
                                O‘quv-uslubiy faoliyat doirasida F. Do‘sumxodjaev va X. Аxmedovlarning o‘quv qo‘llanmalarining (“Ognevaya podgotovka”, “O‘q otish tayyorgarligi”, “Sambo asoslari”) chop etili kutilmoqda. Undan tashqari, 2020/2021 yilning yakuniga qadar 1 ta darslik, 2 ta o‘quv qo‘llanmalar va 4 ta o‘quv-uslubiy qo‘llanmalar tayyorlanib, chop etilishi rejalashtirilgan;
                            </p>
                        </div>
                    </div>
                    <div className={style.text} >
                        <p>
                            O‘quv ishlari bo‘yicha tegishli o‘quv dastur va rejalar ishlab chiqilib, belgilangan maʼruza va amaliy mashgʼulotlar o‘tkazib kelinmoqda. Xozirgi kunda, ushbu yo‘nalishda Ichki ishlar, Mudofaa vazirliklari va Milliy gvardiya harbiy qism va oliy taʼlim muassasalari bilan samarali hamkorlik o‘rnatilgan, ularning harbiy xizmatchi (xodim) mutaxassislari bilan birgalikda “master-klass”lar, amaliy mashgʼulotlar, qo‘rgazma, uchrashuv va davra suhbatlari ham tashkillashtirilmoqda; 
                        </p>
                    </div>
                    <div className={style.flex2} >
                        <div className={style.text1} >
                            <p>
                                Jismoniy tarbiya va sport mashgʼulotlarini samarali tashkillashtirish uchun barcha kerakli inshoot va obʼektlar, jumladan sportning har xil turlari uchun mo’ljallangan va gimnastika maydonchalari mavjud, qisqa davr ichida tegishli shart-sharoitlar yaratilib, sport anjomlari va vositalari sotib olingan.
                            </p>
                        </div>
                        <div className={style.img} style={{backgroundImage:`url(${img2})`}} ></div>
                    </div>
                </div>
            </div>
        </Bounce>
        </div>
    )
}

export default Jangovor4
