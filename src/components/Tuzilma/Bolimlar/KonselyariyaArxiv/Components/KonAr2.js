import React from 'react'
import style from './KonAr2.module.css'
import {nameKaf, teachers } from '../ExtraCard/Json'
import Zoom from 'react-reveal/Zoom';

const KonAr2 = () => {
    return (
        <div className={style.main} >
            <div className={style.inMain} >
                <Zoom right >
                <h2>
                KANSELYARIYA VA ARXIV BO‘LIMI XODIMLARINING TARKIBI
                </h2>
                <span></span>
                </Zoom>
                <Zoom top cascade>
                <div className={style.map} >
                    {
                        teachers.map((teacher, index) => {
                            return(
                                <div className={style.card} key={index}  >
                                    <div className={style.teachImg} style={{backgroundImage:`url(${teacher.img})`}} >
                                        <div className={style.hov} >
                                            <p>
                                                {teacher.name}
                                            </p>
                                        </div>
                                    </div>
                                    <div className={style.text} >
                                        <h3>
                                            {teacher.name}
                                        </h3>
                                        <p>
                                            <span></span>{nameKaf} {teacher.abTeach1}
                                        </p>
                                        <p>
                                            <span></span> {teacher.abTeach2}
                                        </p>

                                       

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                </Zoom>
            </div>
        </div>
    )
}

export default KonAr2
