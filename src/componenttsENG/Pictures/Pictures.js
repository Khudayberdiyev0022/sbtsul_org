import React from 'react'
import style from './Pictures.module.css'
import img1 from "../../assets/img/slider2.webp";
import img2 from "../../assets/img/football.jpg";
import img3 from "../../assets/img/sertificate.jpg";
import img4 from "../../assets/img/army.jpg";
import img5 from "../../assets/img/marsh.jpg";
import img6 from "../../assets/img/kusherbayev.jpg";
import img7 from "../../assets/img/sports.jpg";
import img8 from "../../assets/img/happy.jpg";
import img9 from "../../assets/img/diplom.jpg";

function Pictures() {
    return (
        <div className={style.main}>
            <h1>Fotolavhalar</h1>
            <div className={style.container}>
                <div className={style.box}>
                    <img src={img1} alt='imagess' />
                </div>
                <div className={style.box}>
                    <img src={img2} alt='imagess' />
                </div>
                <div className={style.box}>
                    <img src={img3} alt='imagess' />
                </div>
                <div className={style.box}>
                    <img src={img4} alt='imagess' />
                </div>
                <div className={style.box}>
                    <img src={img5} alt='imagess' />
                </div>
                <div className={style.box}>
                    <img src={img6} alt='imagess' />
                </div>
                <div className={style.box}>
                    <img src={img7} alt='imagess' />
                </div>
                <div className={style.box}>
                    <img src={img8} alt='imagess' />
                </div>
                <div className={style.box}>
                    <img src={img9} alt='imagess' />
                </div>
            </div>
        </div>
    )
}

export default Pictures
