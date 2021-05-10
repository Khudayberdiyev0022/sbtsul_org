import React from 'react'
import style from "../../../components/Home/HomeParts/Home4.module.css";
import Countup from 'react-countup'

const Home4 = () => {
   return (
      <div className={style.main}>
         <div className={style.container}>
            <div className={style.staticBlock}>
               <div className={style.card1}>
                  <div className={style.staticBox}>
                  <p>A specialized branch of TSUL was established</p>

                     <Countup
                        start={1991}
                        end={2019}
                        duration={15}
                        suffix="year"
                        className={style.countText}
                     >
                     </Countup>
                  </div>
                  <div className={style.staticBoxBg}>
                  <p>A specialized branch of TSUL was established</p>
                     <Countup
                        start={1991}
                        end={2019}
                        duration={15}
                        suffix="year"
                        className={style.countText}
                     >
                     </Countup>
                  </div>
               </div>
               <div className={style.card1}>
                  <div className={style.staticBox}>
                  <p>Number of professors and teachers in the Specialized Branch of TSUL</p>
                     <Countup
                        end={39}
                        duration={15}
                        separator=","
                        className={style.countText}
                     >
                     </Countup>
                  </div>
                  <div className={style.staticBoxBg}>
                  <p>Number of professors and teachers in the Specialized Branch of TSUL</p>
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
                  <p>Number of students in the Specialized Branch of TSUL</p>
                     <Countup
                        end={572}
                        duration={15}
                        separator=","
                        // suffix="ta"
                        className={style.countText}
                     >
                     </Countup>
                  </div>
                  <div className={style.staticBoxBg}>
                  <p>Number of students in the Specialized Branch of TSUL</p>
                     <Countup
                        end={572}
                        duration={15}
                        // suffix="ta"
                        className={style.countText}
                     >
                     </Countup>
                  </div>
               </div>
            </div>
         </div>
      </div >
   )
}

export default Home4
