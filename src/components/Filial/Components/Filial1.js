import React from 'react'
import style from './Filial1.module.css'
import pdf from '../../Data/УСТАВ ФИЛИАЛ Назорат режа 1-банд.pdf'
import bg from '../../../assets/img/bg.jpg'
import Zoom from 'react-reveal/Zoom';
import {BsCloudDownload} from 'react-icons/bs';
import Roll from 'react-reveal/Roll'
import Bounce from 'react-reveal/Bounce'


const Filial1 = () => {
    return (
        <div className={style.main} >
            <div className={style.inMain} >
                <div className={style.flex} >
                    <Zoom top cascade>
                        <div className={style.img} style={{backgroundImage:`url(${bg})`}} ></div>
                    </Zoom>
                    <div className={style.text} >
                        <Roll right cascade>
                        <h3>
                        O'ZBEKISTON RESPUBLIKASI PREZIDENTINING 7 FEVRAL 2019 YILDAGI PQ–4166-SON QARORI
                        </h3>
                        </Roll>
                        <Bounce right cascade>
                        <p>
                        Prezidentimiz tashabbusi bilan 2019 yil 7 fevraldagi 
                        PQ–4166-son qaroriga muvofiq Toshkent shahar va Toshkent viloyatida huquqbuzarliklar profilaktikasi va jamoat xavfsizligini ta'minlash sohasida kadrlar tayyorlash va qayta tayyorlash samaradorligini yanada oshirish maqsadida Toshkent davlat yuridik universitetining Ixtisoslashtirilgan filiali tashkil etilgan hamda o'z faoliyatini amalga oshirib kelmoqda.
                        </p>
                        <p>Filialning asosiy vazifalari etib:</p>
                        </Bounce>
                        <Bounce right cascade>
                        <ul>
                            <li>
                            yurisprudentsiya sohasida bazaviy va amaliy kasbiy tayyorgarlikni ta'minlashga qaratilgan o'quv rejalari va dasturlari asosida huquqbuzarliklar profilaktikasi va jamoat xavfsizligini ta'minlash sohasida kadrlar tayyorlash va qayta tayyorlash;
                            </li>
                            <li>
                            nazariy tayyorgarlikning huquqni qo'llash faoliyati bilan uzviy bog'liqligini ta'minlashga qaratilgan zamonaviy shakl va usullar, axborot-kommunikatsiya texnologiyalarini qo'llagan holda o'quv jarayonini ta'lim berishning modul tizimi asosida tashkil etish;
                            </li>
                            <li>
                            ta'lim oluvchilarning psixologik tayyorgarligi, huquqiy, siyosiy madaniyati va huquqiy ongini oshirishning samarali tizimini yaratish;
                            </li>
                            <li>
                            ta'lim oluvchilarning aholi va ommaviy axborot vositalari bilan ishlash va o'zaro hamkorlik qilish ko'nikmalarini takomillashtirish;
                            </li>
                            <li>
                            ta'lim oluvchilarning aholi va ommaviy axborot vositalari bilan ishlash va o'zaro hamkorlik qilish ko'nikmalarini takomillashtirish;
                            </li>
                            <li>
                            huquqbuzarliklar profilaktikasi va jamoat xavfsizligini ta'minlash bo'yicha faoliyatini uslubiy va konsultativ ta'minlash;
                            </li>
                            <li>
                            yuridik kadrlarni tayyorlash, qayta tayyorlash va malakasini oshirishni amalga oshiruvchi ta'lim va ilmiy-tadqiqot, shu jumladan xorijiy mamlakatlardagi muassasalar bilan o'zaro samarali idoralararo hamkorlikni chuqurlashtirish kabilar belgilangan.
                            </li>
                        </ul>
                        </Bounce>
                            <Bounce right cascade>
                        <div className={style.footer} >
                            <p>
                            TDYU Ixtisoslashtirilgan filiali ustavini quyidagi havola orqali yuklab olishingiz mumkin.
                            <span className={style.btn}>
                                <a href={pdf}  rel="noreferrer"  download >Pdf faylni yuklab olish 
                                <BsCloudDownload />
                                </a>
                            </span>
                            </p>
                        </div>    
                            </Bounce>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filial1
