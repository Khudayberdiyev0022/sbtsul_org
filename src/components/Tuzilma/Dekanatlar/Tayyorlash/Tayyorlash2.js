import React from 'react'
import style from './Tayyorlash2.module.css'
import {dek, nameDek} from './Json'
import Zoom from 'react-reveal/Zoom';
import bg from '../../../../assets/img/bg2.png'


const Tayyorlash2 = () => {
    return (
        <div className={style.main} style={{backgroundImage:`url(${bg})`}} >
            <div className={style.inMain} >
                <Zoom right >
                <h2>
                    TAYYORLASH KURSLARI DEKANATINING TARKIBI
                </h2>
                <span></span>
                </Zoom>

                <div className={style.map} >

                {
                    dek.map((teacher, index) => {
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
                                        <span></span>{nameDek} {teacher.abTeach1}
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
            </div>
        </div>
    )
}

export default Tayyorlash2