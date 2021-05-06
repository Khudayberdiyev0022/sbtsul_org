import React from 'react'
import style from './Home4.module.css'
import Countup from 'react-countup'
import Flip from 'react-reveal/Flip';

const Home4 = () => {
   return (
      <div className={style.main}>
         <div className={style.container}>
            <Flip top cascade>
            <div className={style.staticBlock}>
               <div className={style.card1}>
                  <div className={style.staticBox}>
                  <p>TDYU Ixtisoslashtirilgan filiali tashkil topgan</p>

                     <Countup
                        start={1991}
                        end={2019}
                        duration={15}
                        suffix="yil"
                        className={style.countText}
                     >
                     </Countup>
                  </div>
                  <div className={style.staticBoxBg}>
                  <p>TDYU Ixtisoslashtirilgan filiali tashkil topgan</p>
                     <Countup
                        start={1991}
                        end={2019}
                        duration={15}
                        suffix="yil"
                        className={style.countText}
                     >
                     </Countup>
                  </div>
               </div>
               <div className={style.card1}>
                  <div className={style.staticBox}>
                  <p>TDYU Ixtisoslashtirilgan filialida Professor-o'qituvchilar soni</p>
                     <Countup
                        end={39}
                        duration={15}
                        separator=","
                        className={style.countText}
                     >
                     </Countup>
                  </div>
                  <div className={style.staticBoxBg}>
                  <p>TDYU Ixtisoslashtirilgan filialida Professor-o'qituvchilar soni</p>
                     <Countup
                        end={39}
                        duration={15}
                        separator=","
                        className={style.countText}
                     >
                     </Countup>
                  </div>
               </div>
               <div className={style.card1}>
                  <div className={style.staticBox}>
                  <p>TDYU Ixtisoslashtirilgan filialida talabalar soni</p>
                     <Countup
                        end={572}
                        duration={15}
                        separator=","
                        suffix="ta"
                        className={style.countText}
                     >
                     </Countup>
                  </div>
                  <div className={style.staticBoxBg}>
                  <p>TDYU Ixtisoslashtirilgan filialida talabalar soni</p>
                     <Countup
                        end={572}
                        duration={15}
                        suffix="ta"
                        className={style.countText}
                     >
                     </Countup>
                  </div>
               </div>
            </div>
            </Flip>
         </div>
      </div >
   )
}

export default Home4
