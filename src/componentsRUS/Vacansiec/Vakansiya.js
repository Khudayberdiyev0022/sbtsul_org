import React from 'react'
import style from './Vakansiya.module.css'

const VakansiyaRus = () => {

    const apis = [
        {
            job: 'Учитель русского языка',
            salary: '2 000 000',
            aboutJob1: 'Aliqua esse eiusmod mollit esse minim cupidatat qui aliquip nisi cillum nisi occaecat incididunt. Sunt sit fugiat elit anim amet consectetur magna irure aliqua aute non eu voluptate. Ea aute fugiat cillum aute qui Lorem mollit occaecat. Sint elit deserunt ex non voluptate. Amet reprehenderit sint exercitation irure proident nulla. Esse quis nostrud ipsum pariatur non laboris velit laboris ea laboris cupidatat aliquip.',
            tel: '+998712505050',

        },
        {
            job: 'Учитель русского языка',
            salary: '2 000 000',
            aboutJob1: 'Aliqua esse eiusmod mollit esse minim cupidatat qui aliquip nisi cillum nisi occaecat incididunt. Sunt sit fugiat elit anim amet consectetur magna irure aliqua aute non eu voluptate. Ea aute fugiat cillum aute qui Lorem mollit occaecat. Sint elit deserunt ex non voluptate. Amet reprehenderit sint exercitation irure proident nulla. Esse quis nostrud ipsum pariatur non laboris velit laboris ea laboris cupidatat aliquip.',
            tel: '+998712505050',

        },
        {
            job: 'Учитель русского языка',
            salary: '2 000 000',
            aboutJob1: 'Aliqua esse eiusmod mollit esse minim cupidatat qui aliquip nisi cillum nisi occaecat incididunt. Sunt sit fugiat elit anim amet consectetur magna irure aliqua aute non eu voluptate. Ea aute fugiat cillum aute qui Lorem mollit occaecat. Sint elit deserunt ex non voluptate. Amet reprehenderit sint exercitation irure proident nulla. Esse quis nostrud ipsum pariatur non laboris velit laboris ea laboris cupidatat aliquip.',
            tel: '+998712505050',

        },
    ]

    return (
        <div className={style.main} >
            <div className={style.inMain} >
                
                {
                    apis.map((api, index) => {
                        return(
                            <div className={style.card} key={index} >
                                <div className={style.job} >
                                    <h3>
                                        {api.job}
                                    </h3>
                                    <h3>
                                       <span> З/п:</span> {api.salary} <span>сум</span>
                                    </h3>
                                </div>
                                <p>
                                    {api.aboutJob1}
                                </p>
                                <a
                                    href={`tel://${api.tel}`}
                                    rel="noreferrer"
                                    target="_blank"
                                    >
                                    <span>тел:</span> {api.tel}
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default VakansiyaRus