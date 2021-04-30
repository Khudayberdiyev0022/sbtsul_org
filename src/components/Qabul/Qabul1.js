import React from 'react'
import style from './Qabul1.module.css'
import { BsCheckBox } from 'react-icons/bs'
import { RiUserVoiceLine } from 'react-icons/ri'
import { BsExclamationTriangle } from 'react-icons/bs'


const Qabul1 = () => {

    return (
            <div className={style.main} >

                <div className={`container ${style.container}`} >
                    <h5 className={style.title}>Tanlovda qatnashish uchun quyidagi hujjatlar taqdim etilishi lozim:</h5>
                    <p><BsCheckBox /> nomzodning shaxsiy varaqasi (soʼrovnoma, anketa yoki maʼlumotnoma-obʼektivka);</p>
                    <p><BsCheckBox /> faoliyat koʼrsatayotgan (oxirgi) ish joyidan (oʼqish joyidan) maʼlumotnoma (agar egallab turgan lavozimidan ozod qilingan boʼlsa tegishli buyruq nusxasi) va tavsifnoma;</p>
                    <p><BsCheckBox />diplom (diplomdan koʼchirma)ning nusxasi, chet elda oʼqigan boʼlsa, diplomi nostrifikatsiyadan oʼtganligini tasdiqlovchi guvohnoma, oliy yoki oʼrta maxsus, kasb-hunar taʼlim muassasalarining bitiruvchi kurslarida taʼlim olayotganlar bundan mustasno; </p>
                    <p><BsCheckBox /> nomzodning pasport nusxasi;</p>
                    <h5 className={style.title}>Tanlovda ishtirok etish istagini bildirgan nomzodlar tegishli hujjatlarni toshkent davlat yuridik universitetining ixtisoslashtirilgan filiali kadrlar boʼlimiga topshirishlari kerak;</h5>

                    <h3 className={style.h3one}>Ish sharoiti:</h3>
                    <li> Filial xodimlarga kasbiy va lavozim boʼyicha oʼsish (karьera) imkonini beradi;</li>
                    <li>Xorijiy tajribani oʼrganish maqsadida chet ellarga xizmat safarlari, stajirovka hamda malaka oshirish kurslari;</li>
                    <li> Аdliya organlari xodimlariga beriladigan maxsus unvon – martaba daraja (chin)lariga tavsiya etish;</li>
                    <li>Lavozim maoshlariga ustama va qoʼshimcha haq (martaba darajalari uchun 20-50 % gacha, uzoq muddat xizmat koʼrsatganligi uchun 5-40 % gacha) mavjudligi;</li>
                    <li>Mehnatni moddiy ragʼbatlantirish tizimining mavjudligi (xodimning lavozim maoshiga 200 % gacha ustama haq, mukofotlar);</li>
                    <li>Ish haqi hajmi mehnat shartnomasi bilan belgilanadi.</li>

                    <h3 className={style.h3}>Alohida talablar:</h3>
                    <p><RiUserVoiceLine /> og'zaki va yozma nutq ko'nikmalari;</p>
                    <p><RiUserVoiceLine /> rus hamda ingliz tilini bilish rag'batlantiriladi.</p>
                    <h3 className={style.h3danger}>Аdliya organlari va muassasalarida kadrlar bilan ishlash tartibi toʼgʼrisida Nizomga muvofiq, quyidagi shaxslar adliya organlari va muassasalariga ishga qabul qilinishi mumkin emas:</h3>
                    <p><BsExclamationTriangle /> Oʼzbekiston Respublikasi fuqarosi boʼlmagan shaxslar;</p>
                    <p><BsExclamationTriangle /> o'n olti yoshga to'lmagan shaxslar;</p>
                    <p><BsExclamationTriangle /> belgilangan tartibda muomalaga layoqatsiz yoki muomala layoqati cheklangan deb topilgan shaxslar;</p>
                    <p><BsExclamationTriangle /> qasddan sodir etgan jinoyati uchun sudlanganlik holati tugallanmagan yoki sudlanganligi olib tashlanmagan shaxslar;</p>
                    <p><BsExclamationTriangle /> ilgari oʼz kasbiy faoliyatiga mos kelmaydigan qilmishlar sodir etganligi uchun oldingi ish joyidan belgilangan tartibda boʼshatilgan shaxslar;</p>
                    <p><BsExclamationTriangle /> adliya organi yoki muassasasining ishlab turgan xodimi bilan yaqin qarindosh yoki quda-anda boʼlsa (ota-onalar, aka-ukalar, opa-singillar, farzandlar, er-xotinlar, shuningdek er-xotinlarning ota-onalari, aka-ukalari, opa-singillari va farzandlari), agar ishga qabul qilinayotgan yoki tayinlanayotgan lavozim ulardan biri ikkinchisiga bevosita boʼysunib yoki uning nazorati ostida xizmat qilishni taqozo qilsa;</p>
                    <p><BsExclamationTriangle /> ishga kirish uchun soxta hujjatlar yoki bila turib yolgʼon maʼlumotlar taqdim etgan boʼlsa;</p>
                    <p><BsExclamationTriangle /> qonun hujjatlarida belgilangan boshqa holatlar.</p>
                </div>
            </div>
     
    )
}

export default Qabul1