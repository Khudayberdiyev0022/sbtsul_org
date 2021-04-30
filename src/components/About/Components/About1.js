import React from 'react'
import style from './About1.module.css'
import doc from '../../Data/МАЪЛУМОТ_матбуот_анжуманига_тўлиқ.doc'
import  bg from '../../../assets/img/about.jpg'
import Rotate from 'react-reveal/Rotate';
import {BsCloudDownload} from 'react-icons/bs';
import Zoom from 'react-reveal/Zoom';



const About1 = () => {
    return (
        <div className={style.main} >
            <div className={style.inMain} >
            <div className={style.flex} >
                        <Zoom top cascade>
                            <div className={style.img} style={{backgroundImage:`url(${bg})`}} ></div>
                        </Zoom>
                    <Rotate top left cascade>
                    <div className={style.text} >
                        <h3>
                        Filialning ishchi jamoasi
                        </h3>
                        <p>
                        <span></span> Filialning qayta tayyorlash kursi o'quv mashg'ulotlariga mehnatga soatbay haq to'lash asosida 29 nafar huquqni muhofaza qiluvchi organlar tizimida hamda Toshkent davlat yuridik universitetida faoliyat olib borayotgan professor-o'qituvchilar jalb etilgan
                        </p>
                        <p>
                        <span></span>Asosiy shtatdagi professor-o'qituvchilarning 4 nafari O'zbekiston Respublikasi Bosh prokuraturasi tizimida, 2 nafari Ichki ishlar vazirligi tizimida, 2 nafari Mudofaa vazirligi tizimida, 2 nafari Milliy gvardiya tizimida faoliyat yuritgan bo'lib, shundan 1 nafari tizimning amaldagi kadrlar zaxirasiga kiritilgan holda Filialda faoliyat olib bormoqda.
                        </p>
                        <p>
                        <span></span>Rahbar hamda boshqaruv xodimlarining 3 nafari fan nomzodi ilmiy darajasiga ega. Boshqaruv xodimlarining 1 nafari Ichki ishlar vazirligi tizimida, 1 nafari prokuratura tizimida faoliyat yuritgan bo'lib, amaldagi kadrlar zahirasiga kiritilgan holda Filialda faoliyat olib bormoqda.
                        </p>
                        <p>
                            <span></span>O'zbekiston Respublikasi Adliya vazirligiga xodimlarni maxsus unvon va martaba darajalariga tavsiya etish bo'yicha 2019-2020 yillar davomida adliya vazirining tegishli buyruqlari asosida Filialda faoliyat yuritayotgan 18 nafar xodimga maxsus-unvon martaba darajalari berildi, 14 nafar xodim avvalgi ish joyidan olingan unvonlari adliya organlarining martaba darajalariga tenglashtirildi.
                        </p>
                        <p>
                            <span></span>Иш унумдорлиги бўйича алоҳида ўрнак кўрсатаётган профессор-ўқитувчилар ва ходимларни рағбатлантириш мақсадида 1 нафар ходим Адлия вазирлигининг “Адлия аълочиси” кўкрак нишони, 6 нафар профессор-ўқитувчи ҳамда ходимлар Адлия вазирининг “Фахрий ёрлиғи”, 13 нафар профессор-ўқитувчи ҳамда ходимлар Филиал директорининг “Фахрий ёрлиғи” билан тақдирланишди.
                        </p>
                        <div className={style.footer} >
                            <p>
                            TDYU Ixtisoslashtirilgan filiali haqida ma'lumot olish uchun quyidagi havolani bosing.
                            <span className={style.btn}>
                                <a href={doc}  rel="noreferrer"  download >Pdf faylni yuklab olish 
                                <BsCloudDownload />
                                </a>
                            </span>
                            </p>
                        </div>                       
                    </div>
                    </Rotate>
                </div>
            </div>
        </div>
    )
}

export default About1
