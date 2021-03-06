import React from 'react'
import style from '../../components/Students/Students.module.css'
import img1 from '../../assets/img/students1.jpg'
import img2 from '../../assets/img/students2.jpg'
import img3 from '../../assets/img/students3.jpg'
import img4 from '../../assets/img/students4.jpg'
import img5 from '../../assets/img/students5.jpg'
import img6 from '../../assets/img/students6.jpg'

const StudentsRus = () => {
   const Students = [
      {
         img: img1,
      },
      {
         img: img2,
      },
      {
         img: img3,
      },
      {
         img: img4,
      },
      {
         img: img5,
      },
      {
         img: img6,
      },
   ]
   return (
      <div className={style.main}>
         <div className={style.container}>
            {
               Students.map((student, index) => {
                  return (
                     <div className={style.image} key={index}>
                        <img src={student.img} alt="students" />
                     </div>
                  )
               })
            }
         </div>
      </div>
   )
}

export default StudentsRus;
