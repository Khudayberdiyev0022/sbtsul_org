import React, { useState } from 'react'
import style from './Pictures.module.css'
import img1 from "../../assets/img/diplom.jpg";
import img2 from "../../assets/img/football.jpg";
import img3 from "../../assets/img/sertificate.jpg";
import img4 from "../../assets/img/army.jpg";
import img5 from "../../assets/img/marsh.jpg";
import img6 from "../../assets/img/kusherbayev.jpg";
import img7 from "../../assets/img/sports.jpg";
import img8 from "../../assets/img/happy.jpg";
import img9 from "../../assets/img/slider2.webp";
import { ModalPicture } from '../../actions'
import { connect } from 'react-redux'
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { Fragment } from 'react';

function Pictures(props) {
    const [modal, setModal] = useState(false)

    const pictures = [
        img1, img2, img3, img4, img5, img6, img7, img8, img9
    ]

    return (
        <Fragment>
            {
                modal && <div className={style.mainmodal}  >

                    {
                        modal &&
                        <div className={style.modalmodal} >
                            <AiOutlineCloseSquare onClick={() => setModal(false)} />
                            <div className={style.imgmodal} style={{ backgroundImage: `url(${props.img})` }} ></div>
                        </div>
                    }

                </div>
            }
            <div className={style.main}>
                <h1>Fotolavhalar</h1>
                <div className={style.container}>
                    {
                        pictures.map((image, index) => {
                            return (
                                <div key={index} className={style.box} onClick={() => {
                                    props.ModalPicture(image)
                                    setModal(true)
                                }}>
                                    <img src={image} alt='imagess' />
                                </div>
                            )
                        })
                    }

                    {/* <div className={style.box}>
                        <img src={img1} alt='imagess' onClick={() => {
                            props.ModalPicture(img1)
                            setModal(true)
                        }} />
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
                    </div> */}
                </div>
            </div>
        </Fragment>
    )
}
const mapStateToProps = state => {
    return {
        img: state.modalPicture
    }
}


export default connect(mapStateToProps, { ModalPicture })(Pictures)
